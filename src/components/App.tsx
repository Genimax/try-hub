import { useSelector } from "react-redux";
import Footer from "./simple/Footer";
import { Searchbar } from "./smart/Searchbar";
import { RootState } from "../store/store";
import {Header} from "./smart/Header";

function App() {
  const streamer = useSelector((state: RootState) => state.streamer);

  const searchBarRender = () => {
    if (streamer.found === true) return null;

    return <Searchbar />;
  };

  return (
    <div className="App fade-in">
      <Header />
      {searchBarRender()}
      <Footer />
    </div>
  );
}

export default App;
