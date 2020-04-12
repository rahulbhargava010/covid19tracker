import React from 'react';
import './App.css';

import { fetchData } from "./api"

import 'bootstrap/dist/css/bootstrap.min.css'

import { Cards, Chart, CountryPicker } from './components'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {},
      countryDatq: {}
    }
  }

  async componentDidMount(){
    const fetchedData = await fetchData()

    this.setState({
      data: fetchedData
    })
  }

  hanldeCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    // console.log(fetchedData)
    this.setState({
      data: fetchedData
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="container">
        <Cards data = {data} />
        <CountryPicker hanldeCountryChange = {this.hanldeCountryChange} />
        <Chart />      
      </div>
    );
  }
}

export default App;
