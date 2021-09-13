import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import {Link} from "react-router-dom";

export default function SignedOut(props) {
    return (
        <div>
        <Menu.Item>
            <Button as={Link} to={"/jobAdvertisement"} primary onClick={props.singIn} style={{marginleft:"0.5em"}} >Giriş Yap</Button>
            <Button  positive as={Link} to={"/register"} style={{ marginLeft: "0.7em" }}>Kayıt Ol </Button>
        </Menu.Item>            
        </div>
    )
}
