import './App.css';
import Post from './Components/Post';
import { PostInfo } from './PostInfo';


function App() {
  return (
    <div className="App">
     <header>

     </header>

    { PostInfo.map((info) => {
      return <Post username={info.username} avatar={info.avatar} shop={info.shop} main={info.main} snack={info.snack} drink={info.drink}/>
    }
    )}

     
    </div>
  );
}

export default App;
