import style from './ProductDetail.module.scss'
import Thumbnail from './Thumbnail'
import BasicInformation from './BasicInformation'
import Departure from './Departure'
import Summary from './Summary'
import IntroduceTravel from './IntroduceTravel'
import TravelCalender from './TravelCalender'
import Checklist from './Checklist'
import ReservationWay from './ReservationWay'
import ProductFooter from './ProductFooter'

function index() {
  return (
    <>
      <Thumbnail />
      <BasicInformation />
      <Departure />
      <Summary />
      <IntroduceTravel />
      <TravelCalender />
      <Checklist />
      <ReservationWay />
      <ProductFooter />
    </>
  )
}

export default index
