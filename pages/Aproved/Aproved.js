import React , {useState , useEffect} from 'react'
import {connect} from 'react-redux'

// Page Style
import styles from '../../styles/Discard.module.scss'

// Page Components
import Meta from '../../components/Meta'

// Pages
import {clearAprove} from '../../store/actions/actions'

function Aproved({Aprove , clearAprove}) {

	useEffect(() => {
		if (Aprove.every(e => e && Object.keys(e).length === 0 && e.constructor === Object)) {
			setGetItem(false)
		}
	},[Aprove])

	const [GetItem, setGetItem] = useState(true);

	const Products = Aprove ? (Aprove.map((item , index) => {

			if ("ProdAprove" in item && item["ProdAprove"] != undefined){
				return (
					<div className={styles.contcard} key={index}>
						<div className={styles.card}>
							<div className={styles.box}>
								<div className={styles.content}>
									<img className={styles.img} src={item.ProdAprove.image || ' '} alt=''/>
									<span className={styles.price}>Price  : <span className={styles.priceNum}>{item.ProdAprove.price} $</span> </span>
								</div>
							</div>
						</div>
					</div>
				)
			}
	
		})) : <p>Loading...</p>

	const clearaprove = () => {
		// Send the request to the server
		// clear cart
		clearAprove()
		setGetItem(false)
	}

	return (
		<>
			<Meta title={"Aproved"} />
			<div className={styles.BoxCont}>
				<div className={styles.contdark}>
					{Products}
				</div>
				<div className={styles.wrap} style={{ display: GetItem ? 'flex' : 'none'}}>
				  <button className={styles.Clear} onClick={clearaprove}>Clear</button>
				</div>
			</div>
		</>
	)
}

const mapStatToProps = (state) => {
  return{
  	Aprove:state.Products
  }	
}

const mapDispatchToProps = (dispatch) => {
  return{
	clearAprove:() => dispatch(clearAprove())
  }
}

export default connect(mapStatToProps , mapDispatchToProps)(Aproved)
