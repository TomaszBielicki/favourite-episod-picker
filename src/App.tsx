import React, { useEffect } from "react";
import { Store } from "./Store";
import { IAction, IEpisode } from "./interfaces";

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

  const toggleFavAction = (episode: IEpisode): IAction =>
    dispatch({
      type: "ADD_FAV",
      payload: episode,
    });

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
                <div>
                  Season: {episode.season} Number: {episode.number}
                  <button
                    type="button"
                    onClick={() => toggleFavAction(episode)}
                  >
                    Fav
                  </button>
                </div>
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}
