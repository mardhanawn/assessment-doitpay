import { Card, Image } from 'antd'
import nutriscore from '../../assets/icon/nutriscore.svg'
import NutriscoreTag from '../Tag/NutriscoreTag'

function NutriscoreCard({ grade, score }) {
  return (
    <Card className="border-2">
      <div className="mb-5 text-3xl font-semibold">Nutriscore</div>
      <div className="mb-5 text-wrap text-base">
        {`The Nutri-Score, also known as the 5-Colour Nutrition label or 5-CNL, is a five-colour
        nutrition label and nutritional rating system and an attempt to simplify the nutritional
        rating system demonstrating the overall nutritional value of food products. It assigns
        products a rating letter from A (best) to E (worst), with associated colors from green to
        red.`}{' '}
        <br /> <br />
        {`This system was selected by the French government in March 2017 to be displayed on food
        products after it was compared against several labels proposed by industry or retailers. The
        system relies on the computation of a nutrient profiling system derived from the United
        Kingdom Food Standards Agency nutrient profiling system (FSA score). It was created by Santé
        Publique France, the French public health agency, based on the work of Serge Hercberg from
        Sorbonne Paris North University. Other bodies involved in the development of the system
        included the Agency for Food, Environmental and Occupational Health and Safety (ANSES) and
        the High Council for Public Health (HCSP).`}{' '}
        <br /> <br />
        {`The system has been recommended by other European Union countries as well as
        the European Commission and the World Health Organization. Due to the system's
        methodology, its implementation for general use is controversial in some EU countries.`}
      </div>
      <div className="flex items-center gap-x-5 text-3xl font-semibold">
        <Image width={100} src={nutriscore} preview={false} />
        <div>
          Grade : <NutriscoreTag grade={grade} />
        </div>
        Score : {score || '-'}
      </div>
    </Card>
  )
}

export default NutriscoreCard
