import React from 'react'
import { Marker, Map, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import './map.css'
import * as _ from 'lodash';
import { Button } from 'react-md';


// Webpack/leaflet fix
// See https://github.com/Leaflet/Leaflet/issues/4968
import L from 'leaflet';
_.once(() => {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
})();


export class MapView extends React.Component {
   constructor (props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const markers = this.props.points.map((point) => {
      <Marker position={point}>
        <Popup >
        <div class="summary">
            A pretty CSS3 popup.<br/>Easily customizable.
            <div class="buttonHolder">
              <Button raised>Focus</Button>
              <Button raised>View</Button>
            </div>
          </div>     
        </Popup>
      </Marker>
    })
    return (
      <div className="mapContainer">
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerGroup points={this.props} />
        </Map>

      </div>
    );
  }
}

function MarkerGroup(props){
  const points = props.points.points;
  const markers = points.map((point, index)=>{
    return (<Marker position={point} key={index}>
        <Popup >
        <div class="summary">
            A pretty CSS3 popup.<br/>Easily customizable.
            <div class="buttonHolder">
              <Button raised>Focus</Button>
              <Button raised>View</Button>
            </div>
          </div>     
        </Popup>
      </Marker>)
  }
  );
  return (
    <MarkerClusterGroup zoomToBoundsOnClick={false} onClusterClick={(e) => props.points.clickEvent(e)}>{markers}</MarkerClusterGroup>
  )
}
