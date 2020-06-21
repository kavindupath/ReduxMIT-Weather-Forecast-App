import React from "react";
import {connect} from "react-redux";
class WeatherList extends React.Component
{

    renderWeather(cityData)
    {
        return(

            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
            </tr>
        )
    }


    render()
    {
        return(
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

function MapStateToProps(state){
    return {Localweather: state.weather};
}

export default connect(MapStateToProps)(WeatherList);