import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Purchased from "./pages/Purchased";

import reducer from "./reducer";
import { LS } from "./reducer/localStorage";
import { wait } from "@testing-library/user-event/dist/utils";

export const SneakersContext = createContext({})

function App() {
  const [sneakers, dispatch] = React.useReducer(reducer, []);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [isDrawer, setIsDrawer] = React.useState(false);

  React.useEffect(() => {
    wait(1000).then(() => {     // just to linger card-skeletons a bit longer

      axios.get(process.env.REACT_APP_LINK)
        .then(res => dispatch({ type: "init", payload: res.data }))
        .catch(err => { console.log(err); setIsError(true) })
        .finally(() => setIsLoading(false));

    })
  }, [])

  React.useEffect(() => {
    if (isLoading === true) return;
    const selectedIDs = LS.syncSelected(sneakers);
    const favouritesIDs = LS.syncFavourite(sneakers);
    const purchasedIDs = LS.syncPurchased(sneakers);
    selectedIDs.forEach(id => dispatch({ type: "add", payload: id }));
    favouritesIDs.forEach(id => dispatch({ type: "add-favourite", payload: id }));
    purchasedIDs.forEach(id => dispatch({ type: "purchase", payload: id }));
  }, [isLoading])

  React.useEffect(() => {
    LS.syncSelected(sneakers);
    LS.syncFavourite(sneakers);
    LS.syncPurchased(sneakers);
  }, [sneakers])

  return (
    <SneakersContext.Provider value={{ sneakers, dispatch, isLoading, isError, isDrawer, setIsDrawer }}>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/profile" element={<Purchased />} />
        </Routes>

        <Drawer />
      </div>
    </SneakersContext.Provider>
  );
}

export default App;
