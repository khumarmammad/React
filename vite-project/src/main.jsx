import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Wine = ({ title, description, rating }) => {
  return (
    <>
      <div className="wine-card">
        <h2 className="wine-title">{title}</h2>
        <p className="wine-description">{description}</p>
        <p className="wine-rating">{rating}</p>
      </div>
    </>
  );
};
const App = () => {
  return (
    <>
      <div className="wine-list">
        <Wine
          title="Игристое вино Le Grand Noir Brut Reserve Rose"
          description="Франция, розовое, 0.75 л."
          rating="3.6"
        />
        <Wine
          title="Игристое вино Prosecco Extra Dry"
          description="Италия, белое, 0.75 л."
          rating="4.2"
        />
        <Wine
          title="Игристое вино Dom Perignon Vintage"
          description="Франция, белое, 0.75 л."
          rating="4.9"
        />
      </div>
    </>
  );
};
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);