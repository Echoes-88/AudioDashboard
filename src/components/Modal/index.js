import {Button, Modal as BootModal} from 'react-bootstrap';

import useAppContext from '../../context/useAppContext';

function Modal({show, handleShow, equipments}) {

  const {addEquipment } = useAppContext();

  return(
    <BootModal show={show} onHide={() => handleShow(false)}>
    <BootModal.Header closeButton>
      <BootModal.Title>BootModal heading</BootModal.Title>
    </BootModal.Header>
    <BootModal.Body className="text-center">
      {
        equipments.map((equipment, index) => (
          <Button key={index} variant="outline-info" className="m-2" onClick={() => { 
            addEquipment(equipment);
            handleShow(false)}}>
              {equipment}
          </Button>
        ))
      }
    </BootModal.Body>
    <BootModal.Footer>
      <Button variant="secondary" onClick={() => handleShow(false)}>
        Close
      </Button>
      <Button variant="outline-info" onClick={() => handleShow(false)}>
        Save Changes
      </Button>
    </BootModal.Footer>
  </BootModal>
  )
}

export default Modal;