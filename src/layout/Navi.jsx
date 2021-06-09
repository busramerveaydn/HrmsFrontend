import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import Profile from './Profile'


export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        icon="home"
                        name='Ana Sayfa'

                    />
                    <Menu.Menu position='right'>
                        <Profile></Profile>
                        <Menu.Item>
                            <Button primary>Çıkış Yap</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
