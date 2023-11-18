'use client'

import { Box } from '@mui/material';
import { LatLngBounds, CRS, point, Icon, IconOptions } from 'leaflet';
import { MapContainer, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { CharacterPin, CharacterPinImage, LocationPin } from '@/app/styles';
import { JSXMarker } from "@/components/MapMarker";
import { Dispatch, SetStateAction } from 'react';

import SeranaPhoto from "@/assets/images/serana-photo.png";
import OnyxPhoto from "@/assets/images/professorOnyx-photo.png";
import ArenaImage from "@/assets/images/arena-image.jpg";

interface Props {
  setIsCharacterModalOpen: Dispatch<SetStateAction<boolean>>
  setIsLocationModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function Map({ setIsCharacterModalOpen, setIsLocationModalOpen }: Props) {
  const bounds = new LatLngBounds([40.712216, -74.22655], [40.773941, -74.12544]);
  const tilesUrl = `./tiles/{z}/{x}/{y}.png`;

  var mapHeight = -2072.00000000;
  var mapWidth = 3000.00000000;
  var mapExtent = [0.00000000, -2072.00000000, 3000.00000000, 0.00000000];
  var mapMinZoom = 2;
  var mapMaxZoom = 3;
  var mapMaxResolution = 1.00000000;
  var mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
  var crs = CRS.Simple;
  crs.scale = function(zoom) {
    return Math.pow(2, zoom) / mapMinResolution;
  };
  crs.zoom = function(scale) {
    return Math.log(scale * mapMinResolution) / Math.LN2;
  };

  crs.unproject(point(mapExtent[2], mapExtent[3]))

  const seranaMarker = {
    coord: [-500, 2500],
    icon: SeranaPhoto,
    type: 1,
  };

  const onyxMarker = {
    coord: [-1300, 1500],
    icon: OnyxPhoto,
    type: 1
  };

  const arenaMarker = {
    coord: [-1300, 500],
    icon: ArenaImage,
    type: 2
  };

  const icons = [seranaMarker, onyxMarker, arenaMarker];

  return (
    <Box>
      <MapContainer 
        center={[mapHeight / 2, mapWidth / 2]} 
        zoom={2}
        minZoom={mapMinZoom}
        maxZoom={mapMaxZoom}
        crs={CRS.Simple}
        style={{
          width: '100%', height: '100vh', background: '#f9e2c7 !important'
        }}
        
      >
        <TileLayer 
          tileSize={512}
          url={tilesUrl}
        />
        {icons.map((icon, i) => 
          <JSXMarker 
            key={`marker-${i}`} 
            position={icon.coord} 
            iconOptions={{
              className: "jsx-marker",
              iconSize: [100, 100],
              iconAnchor: [50, 50]
            }}
          >
            {
              icon.type == 1 
                ? (
                  <CharacterPin onClick={() => setIsCharacterModalOpen(true)}>
                    <CharacterPinImage src={icon.icon} alt="Character Photo"/>
                  </CharacterPin>
                ) : (
                  <LocationPin onClick={() => setIsLocationModalOpen(true)}>
                    <CharacterPinImage src={icon.icon} alt="Location Photo"/>
                  </LocationPin>
                )
            }
          </JSXMarker>
        )}
      </MapContainer>
    </Box>
  )
};