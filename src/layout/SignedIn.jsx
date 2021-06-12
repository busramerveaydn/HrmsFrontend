import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Icon, Label } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Dropdown pointing="top left" text="Büşra merve Aydın">
                    
                    <Dropdown.Menu>
                    <Dropdown.Item>CV</Dropdown.Item>
                    <Dropdown.Item>Başvurularım</Dropdown.Item>
                    <Dropdown.Item>
                        Mesajlar <br /><br />
                        <Label>
                            <Icon name='mail' /> 23
                             </Label>
                    </Dropdown.Item>
                    <Dropdown.Item>Ayarlar</Dropdown.Item>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    )
}
