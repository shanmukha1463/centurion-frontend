import Card from "../components/BoxCard";
import DropDown from "../components/DropDown";
import "./styles/FinancialList.css";
import itemDetails from "../constants/mainTags";
import { useEffect, useState } from "react";
import axios from "axios";
import customSort from "../utils/sortUtil";

const FinancialList = (props) => {
  const [financialElements, setFinancialElements] = useState([]);
  const [ratingOrder, setRatingOrder] = useState("None");
  const [priceOrder, setPriceOrder] = useState("None");

  useEffect(() => {
    setFinancialElements((finItems) => {
      return [...customSort(ratingOrder, priceOrder, [...finItems])];
    });
  }, [ratingOrder, priceOrder]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/items/${props.itemType}`)
      .then((result) => {
        console.log(result.data);
        setFinancialElements(result.data);
        setPriceOrder("None")
        setRatingOrder("None")
      });
  }, [props]);

  return (
    <div className="mainContainer">
      <div className="buttonNavBar">
        {Object.keys(itemDetails).map((item) => {
          return item !== props.itemType ? (
            <Card key={itemDetails[item].id} itemType={item} />
          ) : null;
        })}
      </div>
      <hr className="hr"></hr>
      <div className="MainList">
        <div className="DropdownsBox">
          <DropDown
            callBackFunc={(newRatingOrder) => {
              setRatingOrder(
                newRatingOrder === ratingOrder ? "None" : newRatingOrder
              );
            }}
            name="Rating"
            selected={ratingOrder}
          />
          <DropDown
            callBackFunc={(newPriceOrder) => {
              setPriceOrder(
                newPriceOrder === priceOrder ? "None" : newPriceOrder
              );
            }}
            selected={priceOrder}
            name="Price"
          />
          <div className="listHeading">
            {itemDetails[props.itemType].headline}
          </div>
        </div>
        <div></div>
        <div className="Items">
          <div className="financialItem">
            <div className="itemName">Name</div>
            <div className="itemRating">Rating</div>
            <div className="itemCost">Price (₹)</div>
            <div className="payButtonNoColor"></div>
          </div>
          <hr className="hrNormal"></hr>
          {financialElements.map((item, index) => {
            return (
              <div
                className="financialItem"
                style={
                  index % 2 == 0 ? {} : { backgroundColor: "rgb(80,80,80,0.5)" }
                }
                key={item.id}
              >
                <div className="itemName">{item.name}</div>
                <div className="itemRating">{item.rating}</div>
                <div className="itemCost">{item.price}</div>
                <button className="payButton">Invest</button>
              </div>
            );
          })}
          <div className="BottomBar"></div>
        </div>
      </div>
    </div>
  );
};

export default FinancialList;
