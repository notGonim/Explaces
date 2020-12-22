import React from 'react'
import styled from 'styled-components'
import { Card } from '../../shared/components/UIElements/Card'
import { PlaceItem } from './PlaceItem'

export const PlacesList = (props) => {

    if (props.items.length === 0) {
        return (
            <PlaceList>
                <Card>
                    <h2>No Places Found. Maybe Create One?</h2>
                </Card>
            </PlaceList>
        )
    }
    return (
        <PlacesListItem>
            {props.items.map(place =>
                <PlaceItem key={place.id} id={place.id}
                    image={place.imageUrl} title={place.title}
                    description={place.description}
                    coordinates={place.location} address={place.address}
                    creatorID={place.creator} />)}
        </PlacesListItem>
    )
}



const PlaceList = styled.div`
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PlacesListItem = styled.ul`
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;
  
`