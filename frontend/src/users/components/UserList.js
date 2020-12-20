import React from 'react'
import styled from 'styled-components'
import { UserItems } from './UserItems'

export const UserList = (props) => {

    if (props.items.length === 0) {
        return (
            <Center>
                <h2>No User Found.</h2>
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


`
