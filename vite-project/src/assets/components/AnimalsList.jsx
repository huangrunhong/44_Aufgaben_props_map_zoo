import AnimalItem from "./AnimalItem"
import { v4 as uuidv4 } from 'uuid';

const AnimalsList=(props)=>{

    return (
<article>
{props.animalsArr.map((animal)=><AnimalItem
    key={uuidv4()}
    bild={animal.emoji}
    name={animal.name}
    spezies={animal.species}
    lebensraum={animal.habitat}
    diaet={animal.diet}
    lebensdauer={animal.lifespan}
    funfacts={animal.funFacts}
    />
)}
</article>

    )
}

export default AnimalsList