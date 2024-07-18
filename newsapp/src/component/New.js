import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export default function New(props) {
    const [articles, setarticles] = useState([]);
    const [load, setload] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const upper=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  document.title=`${upper(props.category)}-news`


    const updatepage = async () => {
        props.setprogress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pagesize=${props.pagesize}&page=${page}`;
        // setload(true);
        let data = await fetch(url);
        props.setprogress(30);
        let parsedata = await data.json();
        props.setprogress(70);
        setarticles(parsedata.articles);
        settotalResults(parsedata.totalResults);
        props.setprogress(100);
        // setload(false)

    }

    useEffect(() => {
        updatepage();

    }, []);

    let fetchMoreData= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pagesize=${props.pagesize}&page=${page+1}`;
        setpage(page+1);
        setload(true);
        let data = await fetch(url);
        let parsedata = await data.json();
        setarticles(articles.concat(parsedata.articles));
        settotalResults(parsedata.totalResults);
        setload(false)
    }


    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '3px' }}>{`Top Headlines of ${props.category}`}</h1>

            <div className='container'>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length!==totalResults}
                    loader={load && <Spinner/>}
                >
                    <div className='container'>
                    <div className='row my-3'>
                        {articles.map((element) => {
                            return <div className='col-md-3' key={element.url}>
                                <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} />
                            </div>
                        })}

                    </div>
                    </div>
                </InfiniteScroll>
                
            </div>
        </>
    )
}
