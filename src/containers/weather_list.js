import React from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";

class WeatherList extends React.Component {

    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        //console.log(temps);
        return (

            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temps} color="orange" />

                </td>
            </tr>
        )
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>

                        <th>Tempreature</th>

                        <th>Pressure</th>

                        <th>Humidity</th>
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