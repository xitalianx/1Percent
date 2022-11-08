import classes from './Card.module.css'

function Card(props) {
    return <div className={classes.card}>{props.children}</div>  //props.children sono i componenti tra apertura e chiusura tag (<Card> propschildren </Card>)
}

export default Card