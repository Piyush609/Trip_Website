import React from 'react'
import "./DestinationStyle.css"

export default class DestinationData extends React.Component{
    render(){
        return(
            <div>
                <div className={this.props.className}>
                    <div className="des-text">
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.text}</p>
                    </div>
                    <div className={this.props.imageName}>
                        <img src={this.props.img1} alt="" />
                        <img src={this.props.img2} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
