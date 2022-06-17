import React, { ReactElement, useState } from "react";
import "./styles.css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface Props {
  title: any;
  items: any;
}

const MovieListRow = ({ title, items }: Props): ReactElement => {
  const [scrollX, setScrollX] = useState(0);

  const scrolNavigateNextIconlX = 0;

  const handleLeftArrow = () => {
    let x = scrolNavigateNextIconlX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2
        style={{
          display: "block",
          fontSize: "1.5em",
          marginLeft: "30px",
          marginBlockStart: "0.83em",
          marginBlockEnd: "0.83em",
          marginInlineEnd: "0px",
          fontWeight: "bold",
        }}
      >
        {title}
      </h2>
      <div className="movieRowLeft" onClick={handleLeftArrow}>
        <MdNavigateBefore className="navigation" />
      </div>
      <div className="movieRowRight" onClick={handleRightArrow}>
        <MdNavigateNext className="navigation" />
      </div>

      <div className="movieRowListarea">
        <div
          className="movieRowList"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item: any, key: any) => (
              <div key={key} className="movieRowItem">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListRow;
