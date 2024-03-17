import newtag from "/images/new-icon.png";
import badgeIcon from "/images/badge-icon.png";
import editorChoiceIcon from "/images/editor-choice-icon.png";
import roketIcon from "/images/roket-icon.png";
import adImage from "/images/add-img.png";
import { FaRegHeart } from "react-icons/fa6";

const Watches = ({ data = [] }) => {
  return (
    <section className="watches-sec">
      <ul>
        {data.map((item, index) => (
          <li
            className={`card ${item.type === "AD" ? "ad-card" : ""}`}
            key={index}
          >
            {item.type === "AD" ? (
              <div className="ad">
                <img src={adImage} alt="" />
              </div>
            ) : (
              <>
                <div className="pre-owned">
                  <p> Pre-Owned </p>
                  <div className="tags">
                    <div className="tooltip">
                      <img src={newtag} alt="badge-icon.png" />
                      <div className="tool-tip-cont">
                        <p>Editor Choice</p>
                      </div>
                    </div>

                    <div className="tooltip">
                      <img src={badgeIcon} alt="badge-icon.png" />
                      <div className="tool-tip-cont">
                        <p>Editor Choice</p>
                      </div>
                    </div>
                    <div className="tooltip">
                      <img src={editorChoiceIcon} alt="badge-icon.png" />
                      <div className="tool-tip-cont">
                        <p>Editor Choice</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="watch-image">
                  <img src={`/images/${item.imgURL}`} alt="watch image" />
                  <img
                    className="ho-active"
                    src={`/images/${item.hoverImg}`}
                    alt=""
                  />
                </div>

                <div className="hover-effect">
                  <div className="watch-content">
                    <p>
                      {item.title} - {item.Gender} - {item.Brand} -{" "}
                      {item.Availability}
                    </p>
                    <p>
                      {item.description.replace(
                        "{{Case Size}}",
                        item["Case Size"]
                      )}
                    </p>
                    <h2>
                      {item.price} <sup>{item.discount}</sup>
                    </h2>
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
                    <span>
                      {" "}
                      <FaRegHeart /> {item.like}{" "}
                    </span>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Watches;
