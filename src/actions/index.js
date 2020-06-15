import axios from "axios";

const API_KEY="39aeb7e2d0f27164e55527e7feeec63c";
const ROOT_URL=`https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//or you can use like this
//const ROOT_URL="https://samples.openweathermap.org/data/2.5/forecast?appid="+ API_KEY;

export function FetchWeather(city)
{

    const url=`${ROOT_URL}&q=${city},us`;
    const request=axios.get(url);

    return{
        type:"FETCH_WEATHER",
        payload: request

    };
}