import React from "react"
import Cards from "./components/Card/Card"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import Chart from "./components/Chart/Chart" 
import styles from "./App.module.css"
import { fetchData } from "./api"
import Info from "./info"
import Footer from "./footre"
import coronaImage from "./image/image.png"


class App extends React.Component{
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
            <div>
            <div className={styles.container}>
                <Info />
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Cards data={ data }/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
            <Footer />
            </div>
        )
    }
}

export default App