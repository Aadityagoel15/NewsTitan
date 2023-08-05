import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description?description:"Click on Read More to read news"}...</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
