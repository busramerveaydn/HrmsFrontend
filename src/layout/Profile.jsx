import React from 'react'
import { Icon, Label } from 'semantic-ui-react'
import {  Dropdown } from 'semantic-ui-react'

export default function Profile() {
    return (
        <div>
            <Dropdown item text='Büşra Merve Aydın' >
                <Dropdown.Menu>
                    <Dropdown.Item>Profil</Dropdown.Item>
                    <Dropdown.Item>CV</Dropdown.Item>
                    <Dropdown.Item>Başvurularım</Dropdown.Item>
                    <Dropdown.Item>
                        Mesajlar <br /><br />
                        <Label>
                            <Icon name='mail' /> 23
                             </Label>
                    </Dropdown.Item>
                    <Dropdown.Item>Ayarlar</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
