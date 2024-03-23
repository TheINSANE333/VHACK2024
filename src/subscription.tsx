import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

interface Props{
  id: number;
  img: string;
  card_title: string;
  card_text: string;
  button_text: string;
}

const Subscription = ({id, img, card_text, card_title, button_text} : Props) => {
  const [clicked, setClicked] = React.useState("false");

  return (
    <div className="card" >
        <img 
            src={img} 
            className="card-img-top" 
            alt="..." 
        />
        <div className="card-body justify-content-center align-item-center">
            <h5 className="card-title">{card_title}</h5>
            <p className="card-text">{card_text}</p>
            <a href="#" style={{textDecoration:"none"}} className={clicked=="false"? "submit": "submit gray"} onClick={() => setClicked("true")}>{clicked == "false"? "Enroll now": "Enrolled!"}</a>
        </div>
    </div>
  )
}

export default Subscription