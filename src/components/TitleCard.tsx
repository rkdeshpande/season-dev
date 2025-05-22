import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudShowersHeavy,
  faSun,
  faWind,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import "./TitleCard.css";

interface TitleCardProps {
  isSpring: boolean;
  isSummer: boolean;
  isAutumn: boolean;
  isWinter: boolean;
}

const TitleCard: React.FC<TitleCardProps> = ({
  isSpring,
  isSummer,
  isAutumn,
  isWinter,
}) => {
  return (
    <div className="hello">
      <FontAwesomeIcon
        data-testid="spring-icon"
        className={`season-icon ${isSpring ? "spring" : ""}`}
        icon={faCloudShowersHeavy}
      />
      <FontAwesomeIcon
        data-testid="summer-icon"
        className={`season-icon ${isSummer ? "summer" : ""}`}
        icon={faSun}
      />
      <FontAwesomeIcon
        data-testid="autumn-icon"
        className={`season-icon ${isAutumn ? "autumn" : ""}`}
        icon={faWind}
      />
      <FontAwesomeIcon
        data-testid="winter-icon"
        className={`season-icon ${isWinter ? "winter" : ""}`}
        icon={faSnowflake}
      />
      <h1>What Boston Season Is It?</h1>
    </div>
  );
};

export default TitleCard;
