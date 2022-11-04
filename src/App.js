import "./App.css";
import Form from "./components/form.js";
import { Info } from "./components/Info.js";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState([]);

  const [state, setState] = useState(false); // state false yapma sebebimiz ekrana f5 attığımızda uygulamanın yok olmasını önlemek
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} setState={setState} />
      <Info setInfo={setInfo} info={info} state={state} />
    </div>
  );
}

export default App;
