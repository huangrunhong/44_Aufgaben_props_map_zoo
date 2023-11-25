
const AnimalItem=(props)=>{

    return (
    <div className="animalItem">
        <div>
        <span>{props.bild}</span>
        <h3>{props.name}</h3>
        <h4>{props.spezies} </h4>
        <h4>{props.lebensraum} </h4>
        <h4>{props.diaet} </h4>
        <p>{props.lebensdauer} years</p>
        </div>
        <ul>
            <li>
                {props.funfacts[0]}
            </li>
            <li>
                {props.funfacts[1]}
            </li>
            <li>
                {props.funfacts[2]}
            </li>
        </ul>
    </div>
    )
}

export default AnimalItem