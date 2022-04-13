import { useContext, useState } from "react";
import Context from "./context";


function Gif() {

const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=PeEFkifr1sVh6oL1NFnFtitvbf1nPacn&limit=20&offset=0&q=";

const [gifsearch, setgifsearch] = useState("");
const [gifs, setgifs] = useState([]);
const [loadingState, setLoadingState] = useState(false);

const a = useContext(Context);

function postgif(gif) {
    const imgurl = gif.target.currentSrc;
    a.setimglink(imgurl);
    setgifsearch("");
    a.setgifmenu(false)
    
    
}

async function searchGif() {
    
        if(gifsearch.length > 0){
          setLoadingState(true);
         await fetch(GIPHY_API+gifsearch)
          .then((res)=>{
            setLoadingState(false);
            return res.json();
          })
          .then((result)=>{
            console.log(result);
            setgifs(result.data.map((gif)=>{
              return gif.images.fixed_height.url;
            }))
          })
          .catch(()=>{
            alert("Something went wrong");
            setLoadingState(false);
          })
        }
      
    }


return(
    <>
    <div>
        <input
        className="gifsearch"
        type="text"
        placeholder="search GIF"
        value={gifsearch} onChange={(e)=> {
            setgifsearch(e.target.value);
        }} ></input>

        <button onClick={searchGif}>Search</button>
    </div>
    <div className="maingifcontainer">
        {loadingState ? (<h4>Loading...</h4>) : (
            <div className="gifcontainer">
                {gifs.map((gif)=> {
                    return(
                        <div className="item">
                      <img className="gifimage" onClick={(gif)=> {postgif(gif)}} src={gif}/>  
                    </div>
                    )
                })}
            </div>
        )}
    </div>

    

    </>
)
}

export default Gif;