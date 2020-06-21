import React from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";
import GoogleMaps from "../components/google_map";

class WeatherList extends React.Component {

    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        
        const pressures = cityData.list.map(weather => weather.main.pressure);

        const humidities = cityData.list.map(weather => weather.main.humidity);
        
        const lon=cityData.city.coord.lon;
        const lat=cityData.city.coord.lat;


        //console.log(temps);
        return (

            <tr key={cityData.city.name}>

                {/*<td>{cityData.city.name}</td>*/}
                <td><GoogleMaps lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>

            </tr>
        )
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>

                        <th>Tempreature (K)</th>

                        <th>Pressure (hPa)</th>

                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Localweather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }

}

function MapStateToProps(state) {
    return { Localweather: state.weather };
}

export default connect(MapStateToProps)(WeatherList);