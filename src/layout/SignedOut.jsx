import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
        <Menu.Item>
            <Button primary onClick={props.singIn} style={{marginleft:"0.5em"}} >Giriş Yap</Button>
            <Button style={{ marginLeft: "0.7em" }}>Kayıt Ol </Button>
        </Menu.Item>            
        </div>
    )
}
