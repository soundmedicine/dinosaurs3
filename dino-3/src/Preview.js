import React from 'react'


const Preview = (props) => (
    <div>
        <p id="message">{props.message}</p>
        <section id="application-preview">{props.text}</section>
    </div>
)

export default Preview