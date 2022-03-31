import React from "react";
import "./Roadmap.css";

export default function index({ data, index }) {
  const { title, description, content } = data;
  return (
    <div className="container-item">
      <div className="container-content-item">
        <div className="container-content-header">
          <span className="container-content-header-time container-roadmap-items">
            {title}
          </span>
          <span className="container-content-header-title">{description}</span>
        </div>
        <ul className="container-content-list">
          {content.map((item, index) => (
            <li key={item} className="li-outside">
              {item.title}
              <ul>
                {item.subtitles.map((item, index) => (
                  <span className="contcont">
                    ▸&nbsp;
                    <li className="li-inside" key={item}>
                      {item}
                    </li>
                  </span>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
