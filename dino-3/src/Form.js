import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({ value: e.currentTarget.value })
    
    }
    
    render() {
        
        return (
                <form id="application-input" onClick={this.handleClick}> 
                    <label>Apply Here:</label>
                    <textarea id="application-text" cols="100" rows="8"></textarea>
                    <input name="text" onChange={this.onChange} type="submit" id="submit" value="Submit" />

                    </form>
        )
    }
}