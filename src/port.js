import './index.css';
import './index.js';
import React from 'react';
import ReactDOM from 'react-dom';
import profile from './images/profile.png'
import img1 from './images/mountain.jpg'
import img3 from './images/download.webp'
import icon1 from './images/like.png'
import icon2 from './images/comment.png'
import icon3 from './images/share.png'





function Hi(props, {maindiv, nam, msg}) {
  return <div className={maindiv}>
    <p><img className="profilepic" src={props.img} width="70px" />
      <span className={nam}>{props.name} </span>
      <span className="date">{new Date().toLocaleString()}</span>
    </p>

    <img src={props.img2} width="100%" className="bdypic" />
    <p className={msg}>{props.message}</p>
    <p><img src={props.img3} width="30px" /> <span className="icon1">Like</span>
      <img src={props.img4} width="30px" /> <span className="icon1">comment</span>
      <img src={props.img5} width="30px" /> <span className="icon1">Share</span>
    </p>
  </div>
}
ReactDOM.render(
    <div>
      <Hi img={profile} name="Shaharyar S Rehman" message="This pic is beautiful" img2={img1} img3={icon1} img4={icon2} img5={icon3} />
      <Hi img={profile} name="Bariq Kamran" message="Night view" img2={img3} img3={icon1} img4={icon2} img5={icon3} />
    </div>, document.querySelector('#root'));
  