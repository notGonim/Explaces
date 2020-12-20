import React from 'react'
import styled from 'styled-components'

export const UserItems = (props) => {
    return (
        <UserItem>
            <UserItemContent>
                <UserItemImage>
                    <img src={props.image} alt={props.name} />
                </UserItemImage>
                <UserItemInfo>
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                </UserItemInfo>
            </UserItemContent>
        </UserItem>
    )
}



const UserItem = styled.li`

`
const UserItemContent = styled.div`

`

const UserItemImage = styled.div`

`

const UserItemInfo = styled.div`

`