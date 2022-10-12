import TilteAndEtc from '../TitleAndEtc'
import CustomRecommend from '../CustomRecommend'
import ContinentsRecommend from '../ContinentsRecommend'
import AgesRecommend from '../AgesRecommend'
import CompanionReccomend from '../CompanionReccomend'
import GolfRecommend from '../GolfRecommend'
import CultureRecommend from '../CultureRecommend'
import HealingReccomend from '../HealingReccomend'

type recommendProps = {
  title: string
  name: string
  api: string
}

function index(props: recommendProps) {
  return (
    <>
      <TilteAndEtc name={props.name} api={props.api} title={props.title} />
      {props.api == 'custom' ? <CustomRecommend /> : ''}
      {props.api == 'continents' ? <ContinentsRecommend /> : ''}
      {props.api == 'ages' ? <AgesRecommend /> : ''}
      {props.api == 'companion' ? <CompanionReccomend /> : ''}
      {props.api == 'golf' ? <GolfRecommend /> : ''}
      {props.api == 'culture' ? <CultureRecommend /> : ''}
      {props.api == 'healing' ? <HealingReccomend /> : ''}
    </>
  )
}

export default index
