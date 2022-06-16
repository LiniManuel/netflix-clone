import React, { useEffect, useState } from "react";
import api from "../../server/api";

import MovieRow from "../../Components/MovieListRow";
import FeaturedMovie from "../../Components/FeaturedMovie";
import Loading from "../../Components/Loading";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./Homepage.css";

export const HomePage = () => {
  const [movieList, setMovieList] = useState<any>([]);
  const [featuredData, setFeaturedData] = useState<any>();
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randonChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randonChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page" style={{ backgroundColor: "#111" }}>
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item: any, key: any) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />

      {movieList.length <= 0 && <Loading />}
    </div>
  );
};
