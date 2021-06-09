import React from 'react'
import { Icon, Input, Label, Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
            <Menu inverted vertical >                
                <Menu.Item name='Job Advertisements' icon="labeled" position="center">
                    <Icon name="list" />
                    <Label color='blue'>51</Label>
        İş İlanları
        </Menu.Item>
                <Menu.Item name='Employees' icon="labeled" position="center">
                    <Icon name="suitcase" />
                    <Label color='black'></Label>
          İş Verenler
        </Menu.Item>
                <Menu.Item name='Recorded' icon="labeled" position="center">
                    <Icon name="bookmark" />
                    <Label color='red'>3</Label>
          Kaydedilenler
        </Menu.Item>
                <Menu.Item name='Users' icon="labeled" position="center">
                    <Icon name="user" />
                    <Label color='black'></Label>
          Kullanıcılar
        </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='İş İlanı Arayın...' />
                </Menu.Item>
            </Menu>
        </div>
    )
}
