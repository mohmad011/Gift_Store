// Page Components
import Link from 'next/link'
import Gift from '../../components/Gift'

function Child3({products}) {

	return (
		<>
			<Gift
				products={products}
				title={"Child3"}
			/>
		</>
	)
}

export default Child3

// Get Products And Add it in Props In This page
export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=5")
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}