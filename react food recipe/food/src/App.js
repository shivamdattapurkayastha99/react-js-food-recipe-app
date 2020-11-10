// const APP_ID="caca9a3b"
//   const APP_KEY="23e4bf82e88bd32e543362704b6ebe0b"
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  // const [search, setSerach] = useState("chiken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "caca9a3b";
  const APP_KEY = "23e4bf82e88bd32e543362704b6ebe0b";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${'chicken'}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  // const onInputChange = e => {
  //   setSerach(e.target.value);
  // };

  // const onSearchClick = () => {
  //   getRecipes();
  // };
  return (
    <div className="App">
      <Header
        // search={search}
        // onInputChange={onInputChange}
        // onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;