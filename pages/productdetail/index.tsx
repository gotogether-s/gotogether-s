import style from './ProductDetail.module.scss'
import Thumbnail from '../../components/ProductDetail/Thumbnail'
import BasicInformation from '../../components/ProductDetail/BasicInformation'
import Departure from '../../components/ProductDetail/Departure'
import ProductFooter from '../../components/ProductDetail/ProductFooter'
import TopButton from '../../components/TopButton'

function index() {
  return (
    <>
      <TopButton />
      <Thumbnail />
      <BasicInformation />
      <Departure />
      <ProductFooter />
    </>
  )
}

export default index
