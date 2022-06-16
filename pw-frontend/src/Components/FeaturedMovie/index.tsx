import React, { ReactElement } from "react";
import "./styles.scss";

interface Props {
  item: any;
}

const FeaturedMovie = ({ item }: Props): ReactElement => {
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let descr = item.overview;
  if (descr.length > 200) {
    descr = descr.substring(0, 200) + "...";
  }

  const handleSubmit = () => {
    window.location.reload();
  };

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featuredVertical">
        <div className="featuredHorizontal">
          <div className="featuredName">{item.original_name}</div>
          <div className="featuredInfo">
            <div className="featuredSeasons">
              {item.number_of_seasons} stagion
              {item.number_of_seasons !== 1 ? "i" : ""}
              {item.number_of_seasons == 1 ? "e" : ""}
            </div>
          </div>
          <div className="featuredDescription">{descr}</div>
          <div className="featuredButtons">
            <a className="featuredWatchbutton" onClick={handleSubmit}>
              ► Riproduci
            </a>
            <a className="featuredMoreInfo" onClick={handleSubmit}>
              Maggiori informazioni
            </a>
          </div>
          <div className="featuredGenres">
            Genere: <strong> {genres.join(", ")} </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
