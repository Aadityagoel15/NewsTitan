import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page : 1,

    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=612e947433984075af22d00cf8927d09&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);         //It will wait for promises to resolve
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async () => {
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=612e947433984075af22d00cf8927d09&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;//&pageSize=20 is the total number if news on a page
    this.setState({loading: true});
    let data = await fetch(url);         //It will wait for promises to resolve
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handleNextClick = async () => {
    console.log("Next")
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){  //Total number of pages required

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=612e947433984075af22d00cf8927d09&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);         //It will wait for promises to resolve
      let parsedData= await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '30px 0px'}}>NewsTitan - Top Headlines</h1>
        {this.state.loading && <Spinner/>} {/*if this is true then show*/}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{ //if loading is not there then show otherwise first not show article and after loading show
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description?element.description.slice(0, 55):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
