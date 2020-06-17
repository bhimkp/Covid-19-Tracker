import React from 'react'

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

import coronaImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})

    }

    render(){
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <p></p>
                <Cards data={data}/>
                <p></p>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <p></p>
                <Chart data={data} country={country}/>
                <p><b>Created by: Bhim Kumar</b></p>
            </div>
        )
    }
}

export default App;
