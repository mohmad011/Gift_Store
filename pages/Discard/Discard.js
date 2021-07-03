import React , {useState ,useEffect} from 'react'
import {connect} from 'react-redux'

// Page Style
import styles from '../../styles/Discard.module.scss'

// Page Components
import Meta from '../../components/Meta'

// Pages
import {clearDiscards} from '../../store/actions/actions'

function Discard({Discards , clearDiscards}) {

	useEffect(() => {
		if (Discards.every(e => e && Object.keys(e).length === 0 && e.constructor === Object)) {
			setGetItem(false)
		}
	},[Discards])
	const [GetItem, setGetItem] = useState(true);

	const Products = Discards ? (Discards.map((item , index) => {
			if ("ProdDisAprove" in item && item["ProdDisAprove"] != undefined){
				return (
					<div className={styles.contcard} key={index}>
						<div className={styles.card}>
							<div className={styles.box}>
								<div className={styles.content}>
									<img className={styles.img} src={item.ProdDisAprove.image || ' '} alt=''/>
									<span className={styles.price}>Price  : <span className={styles.priceNum}>{item.ProdDisAprove.price} $</span> </span>
								</div>
							</div>
						</div>
					</div>
				)
			}
		})) : <p>Loading....</p>

	const cleardiscards = () => {
		// Send the request to the server
		// clear cart
		clearDiscards()
		setGetItem(false)
	}

	return (
		<>
			<Meta title={"Discards"} />
			<div className={styles.BoxCont}>
				<div className={styles.contdark}>
					{Products}
				</div>
				<div className={styles.wrap} style={{ display: GetItem ? 'flex' : 'none'}}>
				  <button className={styles.Clear} onClick={cleardiscards}>Clear</button>
				</div>
			</div>
		</>
	)
}

const mapStatToProps = (state) => {
  return{
  	Discards:state.Products
  }	
}

const mapDispatchToProps = (dispatch) => {
  return{
    clearDiscards:() => dispatch(clearDiscards())
  }
}

export default connect(mapStatToProps,mapDispatchToProps)(Discard)
