import React from "react";

class GoogleMap extends React.Component{
componentDidMount(){
    new GoogleMap.maps.Map(this.refs.map,{
        zoom:12,
        center:{
            lat:this.props.lat,
            lng:this.props.lon
        }
    });
    
}

    render(){
    //this.ref.map
    return <div ref="map"/>;
}

}

export default GoogleMap;