import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Avatar } from '../../shared/components/UIElements/Avatar'
import { Card } from '../../shared/components/UIElements/Card'

export const UserItems = (props) => {
    return (
        <UserItem>
            <Card >
                <Link to={`/${props.id}/places`} >
                    <UserItemImage>
                        <Avatar image={props.image} />
                    </UserItemImage>
                    <UserItemInfo>
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                    </UserItemInfo>
                </Link>
            </Card>
        </UserItem>
    )
}



const UserItem = styled.li`
 margin: 1rem;
  width: calc(45% - 2rem);
  min-width: 17.5rem;
  a{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 1rem;
  color: white;
  background: #292929;
  }
  a:hover,
  a:active {
  background: #0084ff;
}
    h2:hover,
    h2:active,
    h3:hover,
    h3:active {
    color: #292929;
    }
`

const UserItemImage = styled.div`
 width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`

const UserItemInfo = styled.div`
 h2 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  color: #ffd900;
}
h3 {
  margin: 0;
}

`