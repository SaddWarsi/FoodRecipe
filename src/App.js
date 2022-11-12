import './App.css';
import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
function App() {
   const APP_ID = '6fe81c5f';
   const APP_KEY= 'e5b3e171dce6648fb3e1d98e419fa105';
   
   const [Recipes, setRecipes] = useState([]);
   const [search, setsearch] = useState("");
   const [query, setQuery] = useState("chicken");


    useEffect (()=>{
      get_recipe();
    },[query]);

    const updateSearch = e =>{
      setsearch(e.target.value);
      
    }

    const get_recipe = async async =>{
      const Response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await Response.json();
      setRecipes(data.hits);
    }

    const getsearch = e =>{
      e.preventDefault();
      setQuery(search);
    }

  return (
    <div className='App'>
      <form onSubmit={getsearch} className='form'>
        <h1 className='h1tag'>Welcome To Food Recipe</h1>
      <input type='text' className='search-bar' placeholder='Type' value={search} onChange={updateSearch}   />
      <button type='submit' className='submit-btn'>Search</button>
      </form>

        <div className='recipeee'>
          {Recipes.map(Reci =>(
         <Recipe key={Reci.recipe.label} title={Reci.recipe.label} calories={Reci.recipe.calories} image={Reci.recipe.image}
         
         ingredients={Reci.recipe.ingredients}
         />
         
         ))};
        </div>
    </div>
  );
}

export default App;
