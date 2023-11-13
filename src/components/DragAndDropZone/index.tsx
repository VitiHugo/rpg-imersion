import { Component, createRef, ReactNode } from 'react';
import {
  DragAndDropDescription,
  DragContainer,
  DragContentArea,
  DragContentButtons,
  DragContentText,
  SelectFileButton,
} from './styles';
import {
  UploadOutlined as UploadIcon,
  HighlightAlt as HighlightAltIcon,
} from '@mui/icons-material';
import {
  Button,
  FormHelperText,
  Typography,
} from '@mui/material';
import { FILE_TYPE_DESCRIPTIONS, FILE_TYPES_GROUP } from '@/utils/consts';
// import { FILE_TYPE_DESCRIPTIONS, FILE_TYPES_GROUP } from '@utils/consts';

interface File {
  id: any;
  name: string;
  extension: string;
  size: number;
  fileData?: globalThis.File;
  url?: string;
}

type DragAndDropZoneRootProps = {
  children?: ReactNode;
  onSelectFiles: (files: FileList) => void;
  dropHelperText?: string | ReactNode;
  height?: number;
};

export type DragAndDropZoneProps = Omit<
  DragAndDropZoneRootProps,
  'onSelectFiles'
> & {
  onSelectFiles: (files: File[]) => void;
  onRemoveFile?: (filefURL: string) => void;
  selectedFiles: File[];
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

class DragAndDropZoneRoot extends Component<DragAndDropZoneRootProps> {
  dragCounter = 0;

  state = {
    dragging: false,
    areaHeight: 0,
  };

  dropRef = createRef<HTMLDivElement>();

  handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ dragging: true });
    }
  };

  handleDragOut = (e: any) => {
    alert('out')
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.setState({ dragging: false });
    }
  };

  handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ dragging: false });

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.onSelectFiles(e.dataTransfer.files);
      // e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  };

  componentDidMount() {
    let div = this.dropRef.current;

    div?.addEventListener('dragenter', this.handleDragIn);
    div?.addEventListener('dragleave', this.handleDragOut);
    div?.addEventListener('dragover', this.handleDrag);
    div?.addEventListener('drop', this.handleDrop);

    this.setState({
      areeHeight: div?.clientHeight,
    });
  }

  componentWillUnmount() {
    let div = this.dropRef.current;
    div?.removeEventListener('dragenter', this.handleDragIn);
    div?.removeEventListener('dragleave', this.handleDragOut);
    div?.removeEventListener('dragover', this.handleDrag);
    div?.removeEventListener('drop', this.handleDrop);
  }
  

  render() {
    return (
      <DragContainer ref={this.dropRef} dragging={this.state.dragging}>
        {this.state.dragging ? (
          <DragContentArea>
            <HighlightAltIcon />
            <DragContentText>Drop the File(s) here</DragContentText>
          </DragContentArea>
        ) :
          <DragContentButtons dragging={this.state.dragging}>
            <DragAndDropDescription>
              <HighlightAltIcon />

              <Typography color='GrayText' fontSize='large' textAlign='center'>
                Drag and Drop files here
              </Typography>
            </DragAndDropDescription>

            <Typography color='GrayText'>or</Typography>

            <label htmlFor='upload-file'>
              <SelectFileButton
                startIcon={<UploadIcon />}
                variant='contained'
                component='span'
              >
                <input
                  type='file'
                  multiple
                  id='upload-file'
                  name='upload-file'
                  hidden
                  onChange={(e) => this.props.onSelectFiles(e.target.files)}
                />
                Select File(s)
              </SelectFileButton>
            </label>
          </DragContentButtons>
        }
      </DragContainer>
    );
  }
}

const DragAndDropZone = (props: DragAndDropZoneProps) => {
  const handleItemClick = (file: File) => {
    if (file.fileData) {
      const a = document.createElement('a');
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(file.fileData);
      a.href = url;
      a.download = file.fileData.name;
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 0);
      return;
    }

    if (file.url) {
      window.open(file.url, '_blank');
    }
  };

  const handleRemoveItem = (file: File) => {
    props.onSelectFiles(props.selectedFiles.filter((x) => x.id !== file.id));
    if (file.url) {
      props.onRemoveFile?.(file.url);
    }
  };

  const handleFileSelect = (files: FileList) => {
    try {
      for (let i = 0; i < files.length; i++) {
        const isValid = Object.keys(FILE_TYPE_DESCRIPTIONS).some((type) =>
          files.item(i)?.name.toLowerCase().endsWith(type.toLowerCase())
        );

        if (!isValid){
            alert('Arquivo não Suportado')

          return;
        }
      }

      let fileList = [...props.selectedFiles] as File[];

      for (let i = 0; i < files.length; i++) {
        const currentFile = files.item(i);
        const fileExists = fileList.some(
          (x) =>
            x.fileData?.size === currentFile?.size &&
            x.fileData?.name === currentFile?.name &&
            x.fileData?.type.toLowerCase() === currentFile?.type.toLowerCase()
        );

        if (fileExists) {
          continue;
        }

        fileList.push({
          extension: currentFile?.name
            .split('.')
            [currentFile.name.split('.').length - 1]?.toLowerCase() || '',
          name: files.item(i)?.name || '',
          fileData: currentFile,
          size: currentFile?.size || 0,
          id:
            currentFile.name +
            currentFile.size +
            currentFile.type.toLowerCase(),
        });
      }

      const filesSize = fileList.reduce((prev, curr) => curr.size + prev, 0);

      if (filesSize > MAX_FILE_SIZE) {
        showModal({
          title: 'Tamanho Excedido',
          content: (
            <Typography>
              O tamanho máximo permitido para os arquivos é{' '}
              {MAX_FILE_SIZE.toStorageNumber(2)}
            </Typography>
          ),
          ModalProps: { maxWidth: 'xs', minWidth: 'sm' },
          actions: [{ label: 'OK', color: 'primary' }],
        });

        return;
      }

      props.onSelectFiles(fileList);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <DragAndDropZoneRoot {...props} onSelectFiles={handleFileSelect} />

      {/* <FormHelperText color='InfoText'>
        Extensões de arquivo suportadas:{' '}
        <strong>
          {Object.values(FILE_TYPES_GROUP)
            .flat()
            .sort((a, b) => (a > b ? 1 : -1))
            .join(', ')}
        </strong>
      </FormHelperText>
      <FormHelperText color='InfoText'>
        Tamanho máximo total suportado:{' '}
        <strong>{MAX_FILE_SIZE.toStorageNumber(2)}</strong>
      </FormHelperText> */}

      {props.selectedFiles?.length > 0 && (
        <>
          <h1>ah hahaha</h1>
        </>
      )}
    </>
  );
};

export default DragAndDropZone;
