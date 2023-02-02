import { Link } from "react-router-dom";
import './MoviesCard.css';

function MoviesCard(props) {



    return (
        {/* <div className="card">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src={props.img} className="img-fluid"/>
          <a href="#!">
            <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
          </a>
        </div>
        <div className="card-body">
           <Link to={props.link}><h5 class="card-title">{props.title}</h5></Link>
        </div>
    </div>*/},

    
      <div className="card " style={{width:'90%'}}>
        <img src={props.img} className="card-img-top"  style={{width:'100%'}}/>
        
        <div className="card-body ">
         {/*<Link to={props.link}><h5 className="card-title">{props.title}</h5></Link> */}
         <Link to={props.link} class="btn1 btn btn-light">More Details</Link>
        </div>
      </div>
     
   
  

       

    )





}
export default MoviesCard;