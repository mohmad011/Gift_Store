// Page Components
import Link from 'next/link'
import Meta from './Meta'
import {connect} from 'react-redux'

// React Hooks
import {useState} from 'react'

// Page Style
import style from '../styles/Gift.module.scss'

// Pages
import {Aproved , DisAproved} from '../store/actions/actions'


function Gift({products , title , DisAproved , Aproved}) {

	const [DisAproveInfo , setDisAproveInfo] 	= useState({});
	const [AproveInfo , setAproveInfo] 			= useState({});

	const AddProducts = products.map((product) => (
			<div className={style.contcard} key={product.id}>
				<div className={style.card}>
					<div className={style.box}>
						<div className={style.content}>
							<img className={style.img} src={product.image} alt=""/>
							<h2 className={style.h2}>{product.price}$</h2>
							<button onClick={() => aproved({id:product.id,price:product.price,image:product.image})} className={style.a}>
								Aprove
							</button>
							<button onClick={() => disaproved({id:product.id,price:product.price,image:product.image})} className={style.a}>
								Disaprove
							</button>
						</div>
					</div>
				</div>
			</div>
		))

	const disaproved = (DisAproveInfo) => {
		console.log(DisAproveInfo)
		DisAproved(DisAproveInfo)
		JSON.parse(localStorage.getItem('Products')).Products.map((item) => {
			if (item && Object.keys(item).length === 0 && item.constructor === Object) {
				localStorage.removeItem(item)
			}
		})
	}

	const aproved = (AproveInfo) => {
		console.log(AproveInfo)
		Aproved(AproveInfo)
		JSON.parse(localStorage.getItem('Products')).Products.map((item) => {
			if (item && Object.keys(item).length === 0 && item.constructor === Object) {
				localStorage.removeItem(item)
			}
		})
	}

	return (
		<>
			<Meta title={title} />
			<div className={style.contdark}>
				{AddProducts}
			</div>
		</>
	)
}

const mapDispatchToProps = (dispatch) => {
  return{
	DisAproved:(DisAproveInfo) => dispatch(DisAproved(DisAproveInfo)),
    Aproved:(AproveInfo) => dispatch(Aproved(AproveInfo))
  }
}

export default connect(null,mapDispatchToProps)(Gift)