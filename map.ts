import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -96,
            lat: 37,
            zoom: 3
        };
        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return <div ref={this.mapContainer} className="map-container" />;
    }
}

export default Map;
