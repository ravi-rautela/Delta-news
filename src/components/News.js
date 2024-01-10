import React, { Component } from 'react'
import NewsItem from '../components/NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default class News extends Component {
    articles = []

    static defaultProps = {
        country: "in",
        category: "general",
        pageSize: 10

    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        // Super function is important to write either you will get an error.  
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
        document.title = `News Hunts - ${this.capitalizeFirstLetter(this.props.category)}`;
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e1bc0e9ae2646258f62b1756297cc00&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })

    }

    handlePrevClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&apiKey=8e1bc0e9ae2646258f62b1756297cc00&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=8e1bc0e9ae2646258f62b1756297cc00&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()

        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles,
            loading: false
        })

    }

    render() {
        return (

            <div className='container my-3'>
                <h2 className='text-center'>News Hunts - Top {this.capitalizeFirstLetter(this.props.category)} headlines  </h2>
                {this.state.loading && <Spinner />}
                <div className="row ">
                    {/* We are using a map function to populate the itmes. */}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 col-sm-1" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} auther={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container my-3 d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>

            </div>
        )
    }
}
