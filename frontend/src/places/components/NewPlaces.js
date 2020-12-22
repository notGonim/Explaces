import React from 'react'
import styled from 'styled-components'
import Input from '../../shared/components/FormElements/Input'

export const NewPlaces = () => {
    return (
        <PlaceForm >
            <Input element="input" type="text" label="Title" />
        </PlaceForm>
    )
}


const PlaceForm = styled.div`
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  background: white;

`