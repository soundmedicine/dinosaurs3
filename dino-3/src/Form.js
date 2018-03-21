import React, { Component } from 'react'
import Preview from './Preview.js'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            isToggleOn: false,
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({text: e.target.value})
    }

    handleClick  =(e) => {
        e.preventDefault()
        if (this.state.isToggleOn === false) {
        this.setState({isToggleOn: true})
        } else {
        this.setState({isToggleOn: false})
        }
        
    }

    render() {
        
        return (
                <form id="application-input" onChange={this.handleChange}> 
                    <label>Apply Here:</label>
                    <textarea id="application-text" cols="100" rows="8" ref={(input) => { this.text = input}}></textarea>
                    <input name="text" type="submit" id="submit" value="Submit" />
                    <button id="preview-toggle" onClick={this.handleClick} >Show Preview</button>
                    {!this.state.isToggleOn && <Preview text = {this.state.text} /> }
                    </form>
        )
    }
}