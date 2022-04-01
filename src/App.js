import './App.css';
import Post from './Components/Post';
import { PostInfo } from './PostInfo';

function App() {
  return (
    <div className="App">
     <h1>Rate My Ideal</h1>

    { PostInfo.map((info) => {
      return <Post username={info.username}/>
    }
    )}

     
    </div>
  );
}

export default App;
