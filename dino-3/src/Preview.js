import React, { Component } from 'react'

export default class Preview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: false,
            text: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    handleUpdate(e) {
        this.setState({text: e.target.value})
    }

    render() {
        const {text} = this.state
        return (
            
            <div>
                
                <p id="message">&nbsp;</p>
                <button id="preview-toggle" onClick={this.handleClick}>Show Preview</button>
                <section id="application-preview" className={`${this.state.isToggleOn ? '' : 'hidden'}`}>{text}</section>
            </div>
        )
    }
}