import { useSelector } from "react-redux";
import Footer from "./simple/Footer";
import { Searchbar } from "./smart/Searchbar";
import { RootState } from "../store/store";
import { Header } from "./smart/Header";
import { Pages } from "./smart/Pages";

function App() {
  const streamer = useSelector((state: RootState) => state.streamer);

  return (
    <div className="App fade-in">
      <Header />
      <Pages />
      <Searchbar />
      <Footer />
    </div>
  );
}

export default App;
