// Page Components
import Link from 'next/link'
import Gift from '../components/Gift'

function Child1({products}) {

  return (
    <>
      <Gift
        products={products}
        title={"Child1"}
      />
    </>
  )
}

export default Child1

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