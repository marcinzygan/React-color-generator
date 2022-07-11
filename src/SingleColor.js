import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const backgroundRgb = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const copyToClipboard = function () {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      onClick={copyToClipboard}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${backgroundRgb})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
