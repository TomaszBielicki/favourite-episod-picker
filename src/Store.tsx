import React, { useReducer } from "react";

interface IState {
  episodes: [];
  favourite: [];
}
interface IAction {
  type: string;
  payload: any;
}
const initialState: IState = {
  episodes: [],
  favourite: [],
};
export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
