import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useContext ,useState ,useEffect,useDispatch} from "react";
import { LangContext } from "./Context/LangContext";
import SearchBox from "./SearchBox";
//import {Movies} from './Store/actions/MoiveAction';




function Navbar() {
    const fav=useSelector((state)=>state.AddRemoveReducersR.favorite)

    const {contextLang, setContextLang}=useContext(LangContext)

    //const dispatch =useDispatch();

    const [MoviesQuary, setMoviesQuary] = useState([])

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${searchValue}`,  
        ).then((data => setMoviesQuary(data.data.results)))  //(data => dispatch( Movies(data.data.results)))
    }, [searchValue])





    return (
        <nav className="navbar navbar-expand-lg bg-dark mb-5">
        <div className="container-fluid ">
            <Link className="navbar-brand text-light" to="#">Movies</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to={"/"}> Home </Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/login">login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/signup">signup</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/favourites"><i class="fa-solid fa-heart text-light"></i> {fav.length}</Link>
                </li>

                <li className="nav-item text-light " >
                    <button className="btn btn-dark text-light"  onClick = { ()=>setContextLang(contextLang =="EN"?"AR":"EN")}> {contextLang}</button>
                </li>
               
            </ul>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
  </div>
</nav>
    )

}
export default Navbar;