const InitialValues = {
    lang: "Ar"
}

export default function LangReducer(state = InitialValues, action){

    switch(action.type){
        case "CHANGELANG":
            return{
                ...state,
                lang: action.payload 
            }
        default: 
            return state

    }

}