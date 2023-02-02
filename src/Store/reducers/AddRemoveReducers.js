const InitialValues = {
    favorite:[],
}

export default function AddRemoveReducers(state = InitialValues, action){

    switch(action.type){
        case "ADD":
            return{
                ...state,
                favorite:[...state.favorite]
            }

        case "REMOVE":
            return{
                ...state,
                favorite:[...state.favorite]
            }
        default: 
            if(state === undefined)
                 return[];
            return state;

    }

}