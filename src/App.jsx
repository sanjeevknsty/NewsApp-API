import React,{useState} from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
function App() {
  let [progress,setProgress] = useState(0)
  return (
    <div>
    <LoadingBar
    color='#f11946'
    progress={progress}
    // onLoaderFinished={() => setProgress(0)}
/>
    <Router>
      <Routes setprogress= {setProgress}/>
    </Router>
    </div>
  );
}

export default App;
