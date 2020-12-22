import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../shared/components/FormElements/Button'
import { Card } from '../../shared/components/UIElements/Card'
import Modal from '../../shared/components/UIElements/Modal'

export const PlaceItem = (props) => {

  const [showMap, setShowMap] = useState(false)
  const openMapHandler = () => {
    setShowMap(true)
  }
  const closeMapHandler = () => {
    setShowMap(false)
  }
  return (
    <>
      <Modal show={showMap} onCancel={closeMapHandler}
        header={props.address} contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler} >Close</Button>} >
        <MapContainer><h2>The Map!</h2></MapContainer>
      </Modal>
      <PlaceItemLi>
        <Card className="place-item__modal-content ">
          <PlaceImage >
            <img src={props.image} alt={props.title} />
          </PlaceImage>
          <PlaceInfo>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </PlaceInfo>
          <PlaceAction>
            <Button inverse onClick={openMapHandler}>View On Map</Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </PlaceAction>

        </Card>
      </PlaceItemLi>
    </>
  )
}

const MapContainer = styled.div`
 height: 15rem;
  width: 100%;
`


const PlaceItemLi = styled.li`
  margin: 1rem 0;
`

const PlaceImage = styled.div`
  width: 100%;
  height: 12.5rem;
  margin-right: 1.5rem;
  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
   }
    @media (min-width: 768px) {
    height: 20rem; 
   }
  `


const PlaceInfo = styled.div`
  padding: 1rem;
  text-align: center;
  h2,h3,p {
  margin: 0 0 0.5rem 0;
}
`

const PlaceAction = styled.div`
 padding: 1rem;
  text-align: center;
  border-top: 1px solid #ccc;
  button,a {
  margin: 0.5rem;
}
`