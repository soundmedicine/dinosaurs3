import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Details from './Details'
import Form from './Form'

export default class App extends Component {    

    render() {
        return (
            <div>
                <Header />
                <main>
                    <Details />
                    <Form />
                </main>
                <Footer />
            </div>
        )
    }
}