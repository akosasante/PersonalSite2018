import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostgresIcon from "../../assets/images/code-icons/postgres.png";
import MongoIcon from "../../assets/images/code-icons/mongodb.png";
import TypescriptIcon from "../../assets/images/code-icons/typescript.svg";
import PugIcon from "../../assets/images/code-icons/pug.png";

const iconMap = {
  node: { fontawesome: true, name: "node-js", color: "#7cff70" },
  vue: { fontawesome: true, name: "vuejs", color: "#41b883" },
  slack: { fontawesome: true, name: "slack", color: "#3f46ad" },
  mongo: { fontawesome: false, name: MongoIcon, color: "#04231d" },
  typescript: { fontawesome: false, name: TypescriptIcon, color: "#294e80" },
  postgres: { fontawesome: false, name: PostgresIcon, color: "#31628a" },
  pug: { fontawesome: false, name: PugIcon, color: "#a86454" }
};

/**
 *
 * @param {string} iconProp
 * @returns {Element}
 */
function getIconJSX(iconProp, i) {
  if (iconMap[iconProp]) {
    const icon = iconMap[iconProp];
    if (icon.fontawesome) {
      return <FontAwesomeIcon color={icon.color} key={i} className="tech-icon" icon={["fab", icon.name]} />;
    } else {
      return <img key={i} src={icon.name} alt={iconProp} className="tech-icon" />;
    }
  }
}

/**
 *
 * @param {string[]} iconProps
 */
function getIconsJSX(iconProps) {
  return iconProps.map(getIconJSX);
}

export default getIconsJSX;
