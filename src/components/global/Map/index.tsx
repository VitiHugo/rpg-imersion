'use client'

import { Box, IconButton } from '@mui/material';
import {
  Info as InfoIcon,
  EditLocationAlt as EditIcon
} from '@mui/icons-material';

import { LatLngBounds, CRS, point, Icon, IconOptions } from 'leaflet';
import { MapContainer, Polygon, Popup, TileLayer, useMapEvents} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { CharacterPin, CharacterPinImage, LocationPin } from '@/app/styles';
import { JSXMarker } from "@/components/global/MapMarker";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import SeranaPhoto from "@/assets/images/serana-photo.png";
import OnyxPhoto from "@/assets/images/professorOnyx-photo.png";
import ArenaImage from "@/assets/images/arena-image.jpg";

interface Props {
  setIsCharacterModalOpen: Dispatch<SetStateAction<boolean>>
  setIsLocationModalOpen: Dispatch<SetStateAction<boolean>>
}

export function Map({ setIsCharacterModalOpen, setIsLocationModalOpen }: Props) {
  const [map, setMap] = useState(null);

  const bounds = new LatLngBounds([40.712216, -74.22655], [40.773941, -74.12544]);
  const tilesUrl = `./tiles/{z}/{x}/{y}.png`;

  const purpleOptions = { color: 'red' }
  const multiPolygon = [
    {
      description: 'Whiterbloom',
      color: 'red',
      positions: [
        [-150, 2186],
        [-332, 2200],
        [-454, 2342],
        [-612, 2540],
        [-624, 2680],
        [-656, 2756],
        [-772, 2696],
        [-968, 2726],
        [-1056, 2820],
        [-1014, 2892],
        [-726, 2888],
        [-608, 2892],
        [-244, 2934],
        [-86, 2752],
        [-86, 2218],
        [-140, 2192]
      ]
    },
    {
      description: 'The Arena',
      color: 'blue',
      positions: [
        [-1220, 416],
        [-1299, 332],
        [-1384, 237],
        [-1453, 198],
        [-1561, 270],
        [-1571, 435],
        [-1538, 551],
        [-1434, 719],
        [-1314, 769],
        [-1227, 731],
        [-1176, 600],
        [-1200, 444],
      ]
    }, 
    {
      description: 'Park',
      color: 'yellow',
      positions: [
        [-1270, 1490],
        [-1306, 1296],
        [-1402, 1182],
        [-1536, 1140],
        [-1626, 1186],
        [-1714, 1392],
        [-1720, 1588],
        [-1670, 1756],
        [-1588, 1828],
        [-1492, 1856],
        [-1382, 1844],
        [-1310, 1756],

      ]
    }
  ];

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

  crs.unproject(point(mapExtent[2], mapExtent[3]));

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
  const [coords, setCoords] = useState({});

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        console.log('['+e.latlng.lat + ','+ e.latlng.lng+']');
      },
    });
    return false;
}

  useEffect(() => {
    console.log('coords', coords);
  }, [coords]);
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
        <MapEvents />
        {multiPolygon.map((polygon, i) => {
          return (
            <Polygon 
              key={`polygon-${i}`} 
              positions={polygon.positions} 
              pathOptions={{ color: polygon.color, fillColor:'black', fillOpacity: 0.5 }}
            >
              <Popup className="popup-polygon">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Popup>
            </Polygon>
          )
        })}
      </MapContainer>
    </Box>
  )
};