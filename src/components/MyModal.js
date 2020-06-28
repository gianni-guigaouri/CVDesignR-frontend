import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const MyModal = ({ offre, date }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Postuler
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className='mb-2'>{offre.job_title}</h5>
            <h6 className='mb-2'>{offre.company_name}</h6>
            <h6 className='mb-2 text-muted'>{date}</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{offre.description}</Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Postuler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MyModal
