import L, {LeafletMouseEvent} from 'leaflet'
import React, {useEffect, useState} from 'react'
import {Marker, TileLayer, useMapEvents} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import {useAppDispatch} from '../../../hooks/redux'
import {setFromMapToForm} from '../../../store/reducers/ActionCreators/mapFormActions'
import * as Styles from './styles'


const accessToken = process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN
const mapId = process.env.NEXT_PUBLIC_MAP_ID

const markerIcon = L.icon({
  iconUrl: '/MarkerIcon.svg',
  iconSize: [38, 31], // size of the icon
  iconAnchor: [22, 31], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
})

function MapPlaceholder() {
  return (
    <p>
      Map of Ukraine.{' '}
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )
}

type PositionProps = {
  lat: number,
  lng: number
}

type LocationMarkerProps = {
  position: PositionProps,
  setPosition: (value: PositionProps) => void
}

function LocationMarker({position, setPosition}: LocationMarkerProps) {
  const map = useMapEvents({
    click(event: LeafletMouseEvent) {
      setPosition(event.latlng)
      map.flyTo(event.latlng, 15)
    },
  })

  return !position ? null : (
    <Marker
      position={position}
      icon={markerIcon}
    />
  )
}

const LeafletMap = () => {
  const dispatch = useAppDispatch()
  const [position, setPosition] = useState<PositionProps>({lat: 49.59, lng: 34.55})

  useEffect(() => {
    dispatch(setFromMapToForm({
      latitude: position.lat,
      longitude: position.lng,
    }))
  }, [position])

  return (
    <Styles.CustomMapContainer
      center={[49.58, 34.54]}
      zoom={13}
      scrollWheelZoom={true}
      placeholder={<MapPlaceholder />}
    >
      <TileLayer
        attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
        url={`https://api.mapbox.com/styles/v1/${mapId}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
      />
      <LocationMarker position={position} setPosition={setPosition} />
    </Styles.CustomMapContainer>
  )
}

export default LeafletMap
