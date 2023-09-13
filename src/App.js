import {NavLink, Route, Routes} from "react-router-dom";
import CharactersDetail from "./pages/CharactersDetail";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import Characters from "./pages/Characters";
import EpisodeDetail from "./pages/EpisodeDetail";
import LocationDetail from "./pages/LocationDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/characters">
              <Route index element={<Characters />} />
              <Route path=":id" element={<CharactersDetail />} />
            </Route>
            <Route path="/episode">
              <Route index element={<Episode />} />
              <Route path=":id" element={<EpisodeDetail />} />
            </Route>
            <Route path="/location">
              <Route index element={<Location />} />
              <Route path=":id" element={<LocationDetail />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
