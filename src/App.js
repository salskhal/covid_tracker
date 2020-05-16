import React from "react" 
import styles from "./App.module.css"
import Footer from "./footre"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, About, Prevent } from "./Pages"
import Nav from "./components/Nav/Nav"

const App = () =>{
    return(
        <Router>
        <div>
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/prevent" component={Prevent}/> 
        </Switch>
        <Footer />
        </div>
        </Router>
    )
}



export default App