import React from "react";
import {connect} from "react-redux";
class WeatherList extends React.Component
{
    render()
    {
        return(
            <table className="table-table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tempreture</th>
                        <th>Presure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        )
    }
    
}

function MapStateToProps(state){
    return {Localweather: state.weather};
}

export default connect(MapStateToProps)(WeatherList);