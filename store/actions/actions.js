import {ADDCART,CLEAR_DISCARDS,CLEAR_APROVED} from './types'

export const Aproved = (AproveInfo) => {
	return{
		type:ADDCART,
		AproveInfo,
	}
}

export const DisAproved = (DisAproveInfo) => {
	return{
		type:ADDCART,
		DisAproveInfo
	}
}

export const clearDiscards = () => {
	return{
		type:CLEAR_DISCARDS
	}
}

export const clearAprove = () => {
	return{
		type:CLEAR_APROVED
	}
}