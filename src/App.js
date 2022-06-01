import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";


const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;