import { useState } from "react";
import "./App.css";
import Album from "./components/Album";
 import Albums from "./components/Albums";
 import AddAlbum from './components/AddAlbum'

function App() {
  const [album] = useState({
    album_title: "Rockstar",
    artist: "A.R.Rahaman",
    album_cover:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
  });
  const [albums] = useState([
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    { 
      id:1,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
       id:2,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    
    },
    {
       id:3,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
       id:4,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
       id:6,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    },
    {
       id:6,
      album_title: "Rockstar",
      artist: "A.R.Rahaman",
      album_cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ceb0a114960774.56037a57f1752.jpg",
    }
  ]);

  return (
    <div className="App">
    
       <Albums title={"Albums"} data={albums} />
       <AddAlbum />

    </div>
  );
}

export default App;
