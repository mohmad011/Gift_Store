import {ADDCART,CLEAR_DISCARDS , CLEAR_APROVED} from '../actions/types'

const cartReducer = (state , action) => {

	console.log('state',state)

	switch(action.type){
		case ADDCART:{
			return[
				...state,
				{	
					ProdAprove:action.AproveInfo,
					ProdDisAprove:action.DisAproveInfo
				}
			]

		}

		case CLEAR_DISCARDS:{
			let new_State = [...state];
			new_State.map((item) =>{
				if ("ProdDisAprove" in item){
					delete item['ProdDisAprove']
				}
			})
			return new_State
		}

		case CLEAR_APROVED:{

			let new_State = [...state];
			new_State.map((item) =>{
				if ("ProdAprove" in item){
					delete item['ProdAprove']
				}
			})

			return new_State
		}


		default:{
			if (state === undefined)
				return [];
			return state
		}
	}

}

export default cartReducer;
