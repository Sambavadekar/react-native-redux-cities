import {AddCityActions} from '../redux/addActions'
function addReducer(state,action){
    //debugger;
    switch(action.type){
        case AddCityActions.ADD_NEW_CITY:
            let cities=[...state.cities]
            cities.push(action.text)
            let newState={...state,cities:cities}
            return newState
            break;
        default:return state;
    }
}

export default addReducer