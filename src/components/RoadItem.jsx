import React from "react";
import "./Roadmap.css";
export default function index({ data }) {
  const { title, subtitle, content } = data;
  return (
    <div className="container-item">
      <div className="container-content-item">
        <div className="container-content-header">
          <span className="container-content-header-time">{title}</span>
          <span className="container-content-header-title">{subtitle}</span>
        </div>
        <ul className="container-content-list">
          {content.map((item, index) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
