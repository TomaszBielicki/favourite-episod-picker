import React from "react";

interface IState {
  episodes: [];
  favourite: [];
}
const initialState: IState = {
  episodes: [],
  favourite: [],
};
export const Store = React.createContext<IState>(initialState);

function reducer() {}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
