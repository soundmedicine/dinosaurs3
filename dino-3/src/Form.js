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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        e.preventDefault()
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
        console.log(this.state)
        const message = this.state.message
        return (
                <form id="application-input"  onSubmit={this.handleSubmit}> 
                    <label>Apply Here:</label>
                    <textarea id="application-text" cols="100" rows="8" ref={(input) => {this.text = input}} onChange={this.handleChange}></textarea>
                    <input name="text" type="submit" id="submit" value="Submit"  />
                    <p id="message">{message}</p>
                    <button id="preview-toggle" onClick={this.handleClick} >Show Preview</button>
                    {this.state.isToggleOn ? <Preview text = {this.state.text} message = {this.state.message}/> : null}
                    </form>
        )
    }
}