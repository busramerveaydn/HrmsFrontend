import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {  Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()
    function handleSignOut(params) {
        setIsAuthenticated(false)
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted >
                <Container>
                    <Menu.Item
                        icon="home"
                        name='Ana Sayfa'                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut singIn={handleSignIn} />}
                    </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
