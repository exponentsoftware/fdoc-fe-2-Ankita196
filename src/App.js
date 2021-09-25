import { useState } from "react";
import "./App.css";
import Album from "./components/Album";
 import Albums from "./components/Albums";
 import AddAlbum from './components/AddAlbum'

function App() {
 

  return (
    <div className="App">
    
       <Albums title={"Albums"} data={albums} />
       <AddAlbum />

    </div>
  );
}

export default App;
