import React from 'react'
import { Marker, Map, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './map.css'

export class MapView extends React.Component {
   constructor (props) {
    super(props)
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div class="mapContainer">
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
          </Marker>
        </Map>
      </div>   
    );
  }
}
