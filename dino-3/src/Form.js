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
        this.setState({
            text: e.target.value,
            })
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            message: 'Your application was submitted!',
            text: ''})
       
    }

    handleClick = (e) => {
        e.preventDefault()
        if (this.state.isToggleOn === true) {
        this.setState({isToggleOn: false})
        } else {
        this.setState({isToggleOn: true})
        }
    }

    render() {
        
        return (
                <form id="application-input" onChange={this.handleChange} onSubmit={this.handleSubmit}> 
                    <label>Apply Here:</label>
                    <textarea id="application-text" cols="100" rows="8" ref={(input) => {this.text = input}}></textarea>
                    <input name="text" type="submit" id="submit" value="Submit" />
                    <button id="preview-toggle" onClick={this.handleClick} >Show Preview</button>
                    {this.state.isToggleOn ? <Preview text = {this.state.text} message = {this.state.message}/> : null}
                    </form>
        )
    }
}