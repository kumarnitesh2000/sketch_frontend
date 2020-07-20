import React,{useEffect,useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Food from './Food';
import CachedIcon from '@material-ui/icons/Cached';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
const App = () =>{

  const App_Key = "5b4e4fcab7msh3a2ded5495225f5p10a175jsnc544fcb906bb";
  const url = "https://edamam-food-and-grocery-database.p.rapidapi.com/parser";
  const param = {"ingr":"apple"};
  const [foods , setFood] = useState([]);
  const [search ,setSearch] = useState("");
  const [query,setQuery] = useState("banana");
  //counter a variable to be changed only by the setcounter function 
  //const [counter , setCounter] = useState(0);
  const [load,setLoad] = useState(false);
  useEffect(() => {
      //console.log("Effect Is running .");
      getRecipies();
  },[query,load]);

  const getRecipies = async () => {
        const response = await fetch(url+"?ingr="+query,{ 
          method: 'get', 
          headers: new Headers({
            // Your header content
            'x-rapidapi-host': "edamam-food-and-grocery-database.p.rapidapi.com",
            'x-rapidapi-key': App_Key

          })
            
          });
        const data = await response.json();
        console.log(data.parsed);
        setFood(data.parsed);
        
      }
//run when form submits .      
const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
    setLoad(true);
    setTimeout(() => {setLoad(false)},3000);
    //console.log(load);
}      
const updateSearch = e =>{
setSearch(e.target.value);
//console.log(search);
};


return(
<div style={{backgroundColor:'#eee'}}>
  <div className="App">
        <form onSubmit={getSearch} className="search-form">
            <input className="search-text" type="text" value={search} onChange={updateSearch} style={{textAlign:'center'}}/>
            <button className="search-button btn red">
              {load && <CachedIcon style={{position:'relative',top:'6px',left:'1px'}}/>}
     Search<YoutubeSearchedForIcon style={{position:'relative',top:'6px',left:'5px'}}/>
              </button>
            
        </form>
  {foods.map(foo => (

      <Food title={foo.food.label}
       image={foo.food.image} 
       protien={foo.food.nutrients.PROCNT}
        carbs={foo.food.nutrients.CHOCDF}
         fats={foo.food.nutrients.FAT}/>    
  ))}
  </div>  
</div>

);

}

export default App;
