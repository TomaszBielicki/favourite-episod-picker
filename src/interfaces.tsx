export interface IState {
  episodes: Array<IEpisode>;
  favourite: Array<any>;
}
export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
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
