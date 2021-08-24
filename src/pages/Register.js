import {Button, Checkbox, Form} from "semantic-ui-react";
import React from 'react'

export default function Register(){
    return(
        <Form>
            <Form.Field  >
                <label color={"red"}>Adı</label>
                <input placeholder='Adı' />
            </Form.Field>
            <Form.Field>
                <label>Soyadı</label>
                <input placeholder='Soyadı' />
            </Form.Field>
            <Button type='submit'>Giriş Yap</Button>
        </Form>
    )
}
