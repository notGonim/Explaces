import React from 'react'
import styled from 'styled-components'
import { Card } from '../../shared/components/UIElements/Card'
import { UserItems } from './UserItems'

export const UserList = (props) => {

    if (props.items.length === 0) {
        return (
            <Center>
                <Card >
                    <h2>No User Found.</h2>
                </Card>
            </Center>
        )
    }

    return (
        <UsersList>
            {props.items.map(user => (
                <UserItems key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />
            ))}
        </UsersList>
    )



}



const Center = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UsersList = styled.ul`
list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 90%;
  max-width: 50rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

`
