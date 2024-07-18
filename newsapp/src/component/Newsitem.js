import React from 'react'

export default function Newsitem(props) {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
  <img src={!props.imageurl?'https://www.livemint.com/lm-img/img/2024/07/08/600x338/3-0-103769130-iStock-1182812188-0_1679850494801_1720433205685.jpg':props.imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.newsurl}  className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}
