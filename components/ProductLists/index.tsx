import React from 'react'
import CategoryName from './CategoryName'
import ProductList from './ProductList'
import SelectBox from './SelectBox'
import { useSelector } from 'react-redux'

function index() {
  const viewProductList = useSelector((state: any) => {
    return state.viewProductList
  })
  return (
    <>
      <CategoryName name={viewProductList.name} api={viewProductList.api} />
      <SelectBox api={viewProductList.api} />
      <ProductList />
    </>
  )
}

export default index
