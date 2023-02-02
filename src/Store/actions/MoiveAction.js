import axios from "axios"

export const Movies = (n)=>(dispatch)=>{
    return   axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3f5c2ea4219c807f0347be45ed2ee2f9&page=${n}`, 
    {
        params: {
            _page: 3,
            _limit: 5
        }
    }
).then((res)=>dispatch({
    type:"MOVIES",
    payload :res.data.results
}))
}