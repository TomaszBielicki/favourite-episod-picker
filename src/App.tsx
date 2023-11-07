import React, { Fragment, useContext, useEffect } from "react";
import { Store } from "./Store";

interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: null;
  name: string;
  number: number;
  rating: { average: null };
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
  _links: { self: {}; show: {} };
}

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    state.episodes.length == 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  console.log(state);

  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favourit episod</p>
      <section>
        {state.episodes.map((episode: IEpisode) => {
          console.log(episode);
          return (
            <section key={episode.id}>
              <div>{episode.name}</div>
              <section>
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}
