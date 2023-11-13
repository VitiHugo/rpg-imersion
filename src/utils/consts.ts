export const FILE_TYPE_DESCRIPTIONS = {
  png: 'Imagem PNG',
  jpg: 'Imagem JPG',
  jpeg: 'Imagem JPEG',
  gif: 'Imagem GIF',
  bmp: 'Imagem Bitmap',

  txt: 'Documento de Texto',
  doc: 'Documento do Microsoft Word',
  docx: 'Documento do Microsoft Word',
  rtf: 'Formato Rich Text',
  odt: 'Texto OpenDocument',
  gdoc: 'Documento do Google',

  xls: 'Planilha do Microsoft Excel',
  xlsx: 'Planilha do Microsoft Excel',
  xlsm: 'Planilha do Microsoft Excel',
  csv: 'Arquivo CSV',
  ods: 'Planilha OpenDocument',
  gsheet: 'Planilha do Google',

  gslides: 'Apresentação do Google',
  ppt: 'Apresentação do Microsoft PowerPoint',
  pptm: 'Apresentação do Microsoft PowerPoint',
  pptx: 'Apresentação do Microsoft PowerPoint',
  pps: 'Apresentação do Microsoft PowerPoint 97-2003',
  ppsx: 'Apresentação do Microsoft PowerPoint',
  odp: 'Apresentação OpenDocument',

  emltpl: 'Modelo de E-mail',
  eml: 'Mensagem de E-mail',
  msg: 'Mensagem de E-mail',

  pdf: 'Arquivo PDF',
  htm: 'Página da Web',
};

export const FILE_TYPES_GROUP = {
  Apresentação: ['gslides', 'odp', 'pps', 'ppsx', 'ppt', 'pptm', 'pptx'],
  'Documento de Texto': ['doc', 'docx', 'gdoc', 'odt', 'rtf', 'txt'],
  Imagem: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
  'Mensagem de E-mail': ['eml', 'emltpl', 'msg'],
  Planilha: ['csv', 'gsheet', 'ods', 'xls', 'xlsm', 'xlsx'],
  Outros: ['htm', 'pdf'],
};