import "./styles/BoxCardStyles.css";
import { Link } from "react-router-dom";
import itemDetails from "../constants/mainTags";

const Card = (props) => {
  const route = `/${props.itemType}`;
  return (
    <div className="boxItem">
      <div className="imageDiv">
        <img
          src={itemDetails[props.itemType].logo}
          width={"100%"}
          height={"100%"}
          alt="not available"
        ></img>
      </div>
      <div className="textsContainer">
        <div style={{ width: "100%", fontWeight: "bold", fontSize: "1.2em" }}>
          {itemDetails[props.itemType].title}
        </div>
        <div style={{ width: "100%" }}>{itemDetails[props.itemType].tag}</div>
        <Link
          to={route}
          className="underlined"
          style={{ width: "100%", marginBottom: "3%" }}
        >
          Invest Now→
        </Link>
      </div>
    </div>
  );
};

export default Card;
