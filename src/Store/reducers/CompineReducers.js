import {combineReducers} from "redux"
import LangReducer from "./LangReducer"
import ThemeReducer from "./ThemeReducer"
import AddRemoveReducers from "./AddRemoveReducers"
import MoviesReduer from "./MovieReducer"


export default combineReducers  ({

    langR: LangReducer,
    themeR: ThemeReducer,
    AddRemoveReducersR: AddRemoveReducers,
    MoviesReduerR : MoviesReduer,

    

})