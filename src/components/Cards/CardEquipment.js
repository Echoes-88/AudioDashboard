import React, {useState, useContext, useEffect} from 'react';
import useAppContext from '../../context/useAppContext';

import {Button, Card as BootCard } from 'react-bootstrap';
import Modal from '../Modal';

function Card({title, modalContent}) {


  const { userDatas, equipments } = useAppContext();
  const [show, setShow] = useState(false);


  const handleShow = (status) => {
    setShow(status)
  }


  return(
    <>
      <BootCard className="m-2">
      <BootCard.Header className="text-primary text-left bg-light">{title}</BootCard.Header>
      <BootCard.Body >
      {
        userDatas.equipments?.map((equipment, index) => (
          <Button key={index} variant="outline-info" className="m-2">{equipment}</Button>
        ))
        }
      </BootCard.Body>
      <Button variant="outline-info" onClick={() => setShow(true)}>Editer {title}</Button>
      <Modal show={show} modalContent={modalContent} handleShow={handleShow} equipments={equipments} />

      </BootCard>
    </>
  )
}

export default Card;