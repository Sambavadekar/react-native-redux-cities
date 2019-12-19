import {AddCityActions} from './addActions'
function ActionCreators() {

}
ActionCreators.prototype.addNewCity = function(city) {
    console.log("add action called")
    return {
      type: AddCityActions.ADD_NEW_CITY,
      text: city
    }
}

export default new ActionCreators()