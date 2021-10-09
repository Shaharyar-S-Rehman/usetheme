import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import profile from './images/profile.png'
import img1 from './images/mountain.jpg'
import img8 from './images/mountain2.jpg'
import img9 from './images/nightview.jpg'
import img3 from './images/nightview2.jpg'
import icon1 from './images/like.png'
import icon2 from './images/comment.png'
import icon3 from './images/share.png'

function Hi(props) {
  const [isBright, setIsBright] = React.useState(false);

  const handlechange = () => {
    setIsBright(!isBright)
  }  
return(
   
  <div className={isBright? "maindiv2": "maindiv"}>
      <button className={isBright? "light": "dark"} onClick={handlechange }> Change</button>
    <p><img className="profilepic" src={ props.img} width="70px" />
      <span className={isBright? "nam": "nam2"}>{props.name} </span>
      <span className="date">{new Date().toLocaleString()}</span>
    </p>
    <img src={isBright? props.img2 : props.img6} width="100%" className="bdypic" />
    <p className={isBright? "msg": "msg2"}>{props.message}</p>
    <p><img src={props.img3} width="30px" /> <span className="icon1">Like</span>
      <img src={props.img4} width="30px" /> <span className="icon1">comment</span>
      <img src={props.img5} width="30px" /> <span className="icon1">Share</span>
    </p>
  </div>
)
}

ReactDOM.render(
  <div>
    <Hi img={profile} name="Shaharyar S Rehman" message="This pic is beautiful" img2={img1} img3={icon1} img4={icon2} img5={icon3} img6={img8} />
    <Hi img={profile} name="Bariq Kamran" message="Night view" img2={img3} img3={icon1} img4={icon2} img5={icon3} img6={img9}/>
  </div>, document.querySelector('#root'));
