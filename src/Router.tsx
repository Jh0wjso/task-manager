import { Routes, Route } from "react-router-dom";

import Inicio from "./screens/Inicio";
import Animes from "./screens/Animes";
import Movies from "./screens/Movies";
import Video from "./screens/Video";
import MovieWatch from "./screens/MovieWatch";
import ClassicScreen from "./screens/ClassicScreen";
import DBZScreen from "./screens/DBZScreen";
import GTScreen from "./screens/GTScreen";
import OvaScreen from "./screens/OvaScreen";
import SpecialScreen from "./screens/SpecialScreen";
import DBKaiScreen from "./screens/DBKaiScreen";
import DBSuperScreen from "./screens/DBSuperScreen";
import DBHeroesScreen from "./screens/DBHScreen";
import Video2 from "./screens/Video2";
import VideoAlternative from "./screens/Video3";
import PageNotFound from "./screens/PageNotfound";
import News from "./screens/News";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
}
