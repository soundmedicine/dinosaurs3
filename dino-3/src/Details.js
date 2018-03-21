import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {listing: []}
    }

    componentDidMount() {
        return fetch('listing.json')
        .then(response => response.json())
        .then(listing => this.setState({listing: listing}))
        }

    render() {
       const listing = this.state.listing
        return (
            <section className="job-details">
                <h2>Job Details</h2>
                <h4>{listing.title}</h4>
                <p>{listing.description}</p>
                </section>
        )
    }
}