import TilteAndEtc from '../TitleAndEtc'
import CustomRecommend from '../CustomRecommend'
import ContinentsRecommend from '../ContinentsRecommend'
import AgesRecommend from '../AgesRecommend'
import CompanionRecommend from '../CompanionRecommend'
import GolfRecommend from '../GolfRecommend'
import CultureRecommend from '../CultureRecommend'
import HealingRecommend from '../HealingRecommend'

type recommendProps = {
  title: string
  name: string
  api: string
  apiAddress: string
}

function index(props: recommendProps) {
  return (
    <>
      <TilteAndEtc
        name={props.name}
        api={props.api}
        title={props.title}
        apiAddress={props.apiAddress}
      />
      {props.api == 'custom' ? <CustomRecommend /> : ''}
      {props.api == 'continents' ? <ContinentsRecommend /> : ''}
      {props.api == 'ages' ? <AgesRecommend /> : ''}
      {props.api == 'companion' ? <CompanionRecommend /> : ''}
      {props.api == 'golf' ? <GolfRecommend /> : ''}
      {props.api == 'culture' ? <CultureRecommend /> : ''}
      {props.api == 'healing' ? <HealingRecommend /> : ''}
    </>
  )
}

export default index
