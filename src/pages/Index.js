import "./styles/Index.css";
import Card from "../components/BoxCard";

function Index() {
  return (
    <div className="app">
      <div className="pageTitle">
        <div className="topBar">
          <img
            src="images/centurion.png"
            width="15%"
            height="100%"
            className="navBarImage"
            alt="not available"
          ></img>
        </div>
        <div className="middlePart">
          <h1>Centurion</h1>
          <h2>Save Future by invseting in multiple options</h2>
        </div>
      </div>
      <div className="boxes">
        <Card itemType="agriculture" />
        <Card itemType="realestate" />
        <Card itemType="stocks" />
        <Card itemType="commodities" />
      </div>
    </div>
  );
}

export default Index;
