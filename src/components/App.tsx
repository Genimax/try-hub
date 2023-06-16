import { useSelector } from "react-redux";
import { IStreamer } from "../models/IStreamer";
import Footer from "./simple/Footer";
import { Searchbar } from "./smart/Searchbar";
import { RootState } from "../store/store";

function App() {
  const streamer = useSelector((state: RootState) => state.streamer);

  const searchBarRender = () => {
    if (streamer.found === true) return null;

    return <Searchbar />;
  };

  return (
    <div className="App fade-in">
      {searchBarRender()}
      <Footer />
    </div>
  );
}

export default App;
