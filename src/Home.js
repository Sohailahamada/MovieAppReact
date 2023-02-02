import axios from "axios";
import { useEffect,useContext ,useState } from "react";
import { Link } from "react-router-dom";
import MoviesCard from "./MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import {Movies} from './Store/actions/MoiveAction';
import { LangContext } from "./Context/LangContext";



function Home() {

  //const [moviesData, setmoviesData] = useState([])

  const dispatch =useDispatch()
  const movies =useSelector((state)=>state.MoviesReduerR.movies)
  let [pagenumber,setnumber]=useState(1)
  const {contextLang, setContextLang}=useContext(LangContext)

  useEffect(() => {
    dispatch( Movies(pagenumber))
   /* axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3f5c2ea4219c807f0347be45ed2ee2f9",
       {
        params: {
          _page: 3,
          _limit: 5
        }
      }
    )
      .then((data) => setmoviesData(data.data.results))
      .catch((err) => console.log(err))*/
  }, [pagenumber])






  return (
    <>

      {/*<ul >
                {moviesData.map((singleMovie) =>   {
                    return(
                        
                        <li key={singleMovie.id}> 
                            <Link to={`/singlemovie/${singleMovie.id}`}>  {singleMovie.original_title} </Link>
                        </li>
                        
                    )
                    
                })}
              </ul>*/}

      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {movies.map((singleMovie) => {
            return (


              <div className="col" key={singleMovie.id}>
                <MoviesCard link={`/singlemovie/${singleMovie.id}`} title={singleMovie.original_title} img={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}?api_key=3f5c2ea4219c807f0347be45ed2ee2f9`} />
              </div>



            )

          })}

        </div>

        <div>
       
        
        <button className="btn btn-dark text-light mt-5" onClick = { ()=>setContextLang(contextLang =="EN"?"AR":"EN")}>change language</button>
        </div>

        <div style={{float:'right'}}>
        <button className="btn btn-dark " onClick = { ()=>setnumber(--pagenumber)}><i class="fa-solid fa-arrow-left"></i></button>
        <button className="btn btn-dark mx-5" onClick = { ()=>setnumber(++pagenumber)}><i class="fa-solid fa-arrow-right"></i></button>
        </div>


      
      </div>

    </>
  )

}
export default Home;