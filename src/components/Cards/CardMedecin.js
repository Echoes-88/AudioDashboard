import React, {useState} from 'react';

import {Button, Card as BootCard } from 'react-bootstrap';

function CardUser({title, cardContent}) {

  return(
    <>
    <BootCard className="m-2">
    <BootCard.Header className="text-primary text-left bg-light">{title}</BootCard.Header>


    <BootCard.Body >

      <BootCard.Text className="w-100 text-left" key={cardContent?.firstname + cardContent?.birthday}>
      <p>Nom : {cardContent?.firstname}</p>
      <p>Prenom : {cardContent?.lastname}</p>
      <p>Adresse : {cardContent?.adress}</p>
      </BootCard.Text>

    </BootCard.Body>
    </BootCard>


    </>
  )
}

export default CardUser;