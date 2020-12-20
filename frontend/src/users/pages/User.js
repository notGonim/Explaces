import React from 'react'
import { UserList } from '../components/UserList'

export const User = () => {

    const USERS = [{
        id: 'u1',
        name: 'mah gonim',
        places: 3,
        image: 'https://pbs.twimg.com/profile_images/1234781420809334784/oSL_R0um_400x400.jpg'
    }]

    return (
        <>
            <UserList items={USERS} />
        </>
    )
}
