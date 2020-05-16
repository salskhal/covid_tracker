import React from "react"
import { fetchData } from "../../api"
import Info from "../../info"
import styles from "./Home.module.css"
import { Cards, Chart, CountryPicker, } from "../../components"
import coronaImage from "../../image/image.png"

class Home extends React.Component{
    state = { 
        data: {},
        country: "",
    }
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData})
    }

    handleCountryChange = async (country) => {

        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country})
    }

    render() {
        const { data, country} = this.state
        return(
            <div className={styles.container}>
                <Info />
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={ data }/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>        
        )
    }

}

export default Home