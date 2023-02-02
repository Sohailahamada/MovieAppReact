import { useDispatch, useSelector } from 'react-redux';
import {RemoveFavourite} from './Store/actions/RemoveAction';
import './MovieCard.css';
function MyFavouriteMovie(props){

    const dispatch =useDispatch();
    const fav=useSelector((state)=>state.AddRemoveReducersR.favorite)
    const deletemovie=(movie)=>{
        dispatch(RemoveFavourite(fav.splice(movie,1)))
    }




    return(
      <div className='container '>
        <div className='row'>
          <div className='col-1'></div>

          <div className='col-10 fonttype'>


        <div className="card mb-5 " style={{width: "100%" , marginRight:'100px' }}>
        <div className="row g-0">
          <div className="col-md-5">
           <img
              src={props.img}
              class="img-fluid rounded-start" />
          </div>
          <div className="col-md-7">
            <div className="card-body">
            <button className='btn btn-light' style={{float:'right'}} onClick={()=>deletemovie(props)}><i class="fa-solid fa-delete-left"></i></button>
              <h4 className="card-title" style={{fontSize:'50px'}}>{props.title}</h4>
              <p className="card-text" style={{fontSize:'20px'}}>
              {props.desc}
              </p>
              
              <p className="card-text" >
                <small className="text-muted">{props.date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      </div>


      <div className='col-1'></div>
      </div>
    </div>
    )





}
export default MyFavouriteMovie;