
import {Card as BootCard } from 'react-bootstrap';

function Card({title}) {

  return(
    <>
    <BootCard className="m-2">
    <BootCard.Header className="text-primary text-left bg-light">{title}</BootCard.Header>

    <BootCard.Body >
        
    </BootCard.Body>
    </BootCard>


    </>
  )
}

export default Card;