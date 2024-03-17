import { useEffect, useState } from "react";
import newtag from "/images/new-icon.png";
import badgeIcon from "/images/badge-icon.png";
import editorChoiceIcon from "/images/editor-choice-icon.png";
import roketIcon from "/images/roket-icon.png";
import { FaRegHeart } from "react-icons/fa6";



const Watches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/data.json")
      const data = await res.json()
      setData(data.products)
    }
    fetchData()
  }, []);

 

  return (
    <section className="watches-sec">
      <ul>
        {data.map((item, index) => (
          <li className="card" key={index}>
            <div className="pre-owned">
              <p> Pre-Owned </p>
              <div className="tags">
                <img src={newtag} alt="new tag icon" />
                <img src={badgeIcon} alt="badge-icon.png" />
                <img src={editorChoiceIcon} alt="badge-icon.png" />
              </div>
            </div>

            <div className="watch-image">
                <img src={`/images/${item.imgURL}`} alt="watch image" />
                <img className="ho-active"src={`/images/${item.hoverImg}`} alt="" />
            </div>

            <div className="hover-effect">
              <div className="watch-content">
                <p>{item.title}</p>
                <p>{item.description}</p>
                <h2>{item.price} <sup>{item.discount}</sup></h2>
                <h3> {item.RealPrice} </h3>
              </div>

              <div className="onHoverContent">
                <h2> Available In </h2>
                <h3> On Size </h3>
              </div>
              
            </div>

            

            <div className="emi-abv">
              <p> {item.emi} </p>

              <div className="card-bottom-sec">
                <img src={roketIcon} alt="roket Icon" />
                <span> <FaRegHeart /> {item.like} </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Watches;
