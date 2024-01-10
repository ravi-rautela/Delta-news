import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        //  Destructureing of the code
        let { title, description, imageUrl, newsUrl, auther, date, source } = this.props;
        return (
            <div className='mt-3'>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="tezting" />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <span className="badge badge-pill badge-warning">{source}</span>
                        <p className="card-text"><small className="text-muted">By {!auther ? "Unknown" : auther} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
