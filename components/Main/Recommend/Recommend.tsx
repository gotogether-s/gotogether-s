import TilteAndEtc from '../TitleAndEtc/TitleAndEtc'
import CustomRecommend from '../CustomRecommend/CustomRecommend'
import ContinentsRecommend from '../ContinentsRecommend/ContinentsRecommend'
import AgesRecommend from '../AgesRecommend/AgesRecommend'
import CompanionRecommend from '../CompanionRecommend/CompanionRecommend'
import GolfRecommend from '../GolfRecommend/GolfRecommend'
import CultureRecommend from '../CultureRecommend/CultureRecommend'
import HealingRecommend from '../HealingRecommend/HealingRecommend'

type recommendProps = {
  title: string
  name: string
  api: string
  apiAddress: string
}

const Recommend = (props: recommendProps) => {
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

export default Recommend
