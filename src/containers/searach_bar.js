import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {FetchWeather} from "../actions/index";


class SearchBar extends React.Component {
  constructor(props){
      super(props);

      this.state={term:""};
      this.onInputChange=this.onInputChange.bind(this);
      this.onFormSubmit=this.onFormSubmit.bind(this);

  }

  onInputChange(event)
  {
     // console.log(event.target.value);
      this.setState({term:event.target.value});
  }

  onFormSubmit(event)
  {
      event.preventDefault();
      //We need to go and and fetch weather data
        this.props.FetchWeather(this.state.term);
        this.setState({term: " "});
  }
  
    render() {
    return (
      <form  onSubmit={this.onFormSubmit} className="input-group">
        <input 
        placeholder="Get a five day forecat in your fav cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}


function MapDispatchToProps(dispatch)
{
    return bindActionCreators({FetchWeather},dispatch);
}


export default connect(null, MapDispatchToProps)(SearchBar);