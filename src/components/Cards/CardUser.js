import React, {useState, useRef} from 'react';
import useAppContext from '../../context/useAppContext';

import {Card as BootCard } from 'react-bootstrap';

function CardUser({title, cardContent}) {

  const { updateUser } = useAppContext();

  const firstname = useRef(null);
  const lastname = useRef(null);
  const age = useRef(null);
  const adress = useRef(null);

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false)

  const handleShow = (status) => {
    setShow(status)
  }

  const saveData = (id, content) => {
    updateUser(id, content)
    setEdit(false)
  }


  return(
    <>
    <BootCard className="m-2">
    <BootCard.Header className="text-primary text-left bg-light">{title}</BootCard.Header>

    <BootCard.Body >

            <BootCard.Text className="w-100 text-left" key={cardContent?.firstname + cardContent?.birthday}>

            <div>
              Nom : {cardContent.firstname}
              {edit && (
                <input ref={firstname} name="firstname" placeholder={cardContent.firstname} />
              )}
            </div>
            {edit && (
            <button onClick={() => saveData("firstname", firstname)}>Mettre à jour</button>
            )}

            <div>
              Prenom : {cardContent.lastname}
              {edit && (
                <input ref={lastname} name="lastname" placeholder={cardContent.lastname} />
              )}
            </div>
            {edit && (
            <button onClick={() => saveData("lastname", lastname)}>Mettre à jour</button>
            )}

            <div>
              Age : {cardContent.age} ans
              {edit && (
                <input ref={age} name="age" placeholder={cardContent.age} />
              )}
            </div>
            {edit && (
            <button onClick={() => saveData("age", age)}>Mettre à jour</button>
            )}

            <div>
              Adresse : {cardContent.adress}
              {edit && (
                <input ref={adress} name="adress" placeholder={cardContent.adress} />
              )}
            </div>
            {edit && (
            <button onClick={() => saveData("adress", adress)}>Mettre à jour</button>
            )}

            {!edit && (
              <button onClick={() => setEdit(!edit)}>editer</button>
            )}
            </BootCard.Text>

    </BootCard.Body>
    </BootCard>
    </>
  )
}

export default CardUser;