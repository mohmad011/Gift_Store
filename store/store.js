import {createStore, combineReducers} from 'redux'
import cartReducer from './reducers'

function loadState(){
	try{
		const state = localStorage.getItem('Products')

		if (state) {
			return JSON.parse(state);
		}

	} catch(e){
		// Ignore Errors
	}

	// return {
	// 	 Products:[]
	// }

}

function saveState(state){
	console.log('saveState...')
	localStorage.setItem('Products' , JSON.stringify(state))
}

const appReducer = combineReducers({
	Products:cartReducer
})

const store = createStore(appReducer , loadState())

store.subscribe(() => {
	saveState(store.getState())
})

export default store;