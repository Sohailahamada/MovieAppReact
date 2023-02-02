import { useSelector } from "react-redux";
import MyFavouriteMovie from "./MyFavouriteMovie";


function FavoriteMovies(){

  const datafav =useSelector((state)=>state.AddRemoveReducersR.favorite)
  console.log(datafav)


    return(
        <>
        {datafav.map((singlemovie)=>{
            console.log(datafav.length)
               return(
                <MyFavouriteMovie key={singlemovie.title} img={singlemovie.img} title={singlemovie.title} desc={singlemovie.desc} />
               )

        })
        }
        
        
        
        
        
        </>
    )
}
export default FavoriteMovies;