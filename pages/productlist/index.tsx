import React from 'react'
// import { useRouter } from 'next/router'
import ProductLists from '../../components/ProductLists'

function index() {
  // const router = useRouter()
  // console.log(router.query)
  // // const { name } = router.query
  // // console.log(name)
  return (
    <>
      <ProductLists />
    </>
  )
}

export default index
