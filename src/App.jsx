import { useState } from "react";
import Header from "./components/Layout/Header"
import "./App.css"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";

function App() {
const [isModal,setIsmodal] = useState(false)
  
const modalCloseHandler=()=>{
  setIsmodal(false)
}
const modalOpenHandler = () => {
  setIsmodal(true);
};
  return (
    <div className="App">
      {isModal ? <Cart onClose={modalCloseHandler} /> : null}

      <Header onModalOpen={modalOpenHandler}></Header>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App
