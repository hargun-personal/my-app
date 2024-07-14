import { Component } from "react";
import AppHeader from './components/app-header.component'
import AppHome from './components/app-home.component'
import AppFooter from './components/app-footer.component'

var a = {
    'net': 23,
    'f': 'sd'
}
export class App extends Component {
    render () {
        return (
        <>
            <AppHeader size={a} />
            <AppHome/>
            <AppFooter link="https://conceptarchitect.in" text="Concept Architect"/>
        </>
        )
    }
}