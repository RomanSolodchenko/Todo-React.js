import React from "react";
import "./News.css";
import MTime from "../Time/Time";

const News = () => {
  return (
    <div className="News_block">
      <div className="News">
        <div className="NewsCard">
          <div className="Card_1">
            <span className="Card_title">Bloknot Taganrog</span>

            <div class="contacts">
              <div className="icon">
                <img src="Images/web.png" alt="web-link"/>
                <a href="https://bloknot-taganrog.ru/" />
              </div>

              <div className="icon">
                <img src="Images/instagram.png" alt="instagram-link" />
                <a href="https://www.instagram.com/bloknot.taganrog/" />
              </div>
            </div>
          </div>

          <div className="Card_2">
            <span className="Card_title">LIfe News</span>

            <div class="contacts">
              <div className="icon">
                <img src="Images/web.png" alt="web-link"/>
                <a href="https://life.ru/" />
              </div>

              <div className="icon">
                <img src="Images/instagram.png" alt="instagram-link" />
                <a href="https://www.instagram.com/lifenews_ru/" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <MTime />
      </div>
      
    </div>
  );
};

export default News;
