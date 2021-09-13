import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Header, Image, Message, Segment } from 'semantic-ui-react'
import UserService from "../services/userService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/actions/authActions";
import { toast } from "react-toastify";

export default function Login() {

    const dispatch = useDispatch()

    const handleLogin=(user)=>{
        dispatch(userLogin(user))
    }

    const history = useHistory();

    let userService = new UserService();
    const userLoginSchema = Yup.object().shape({
        email: Yup.string().required("Bu alan doldurulmak zorundadır").email("Geçerli bir email adresi giriniz"),
        password: Yup.string().required("Bu alan doldurulmak zorundadır")
    })

    const formik = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        validationSchema: userLoginSchema,
        onSubmit:(values) => {
            userService.login(values).then((result) => {
                handleLogin(result.data.data)
                history.push("/")
            }).catch((result) => {
                toast.error(result.response.data.message)
            })
        }
    })

    return (
        <div>
            <Header as="h2" color="teal" textAlign="center">
                <Image src="https://static.wixstatic.com/media/079eb3_0ecc4bea05cd48a5a8d698df497a57e6~mv2.jpg/v1/fill/w_373,h_160,al_c,q_80,usm_0.66_1.00_0.01/Ekran%2520G%25C3%25B6r%25C3%25BCnt%25C3%25BCs%25C3%25BC%2520.webp" />
            </Header>
            <Form size="large" onSubmit={formik.handleSubmit}>
                <Segment stacked>
                    <div>
                        <label><b>Email</b></label>
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="E-mail adresi"
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.errors.email && formik.touched.email && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.email}
                                </div>
                            )
                        }
                    </div>
                    <div style={{marginTop:"1em"}}>
                        <label><b>Şifre</b></label>
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Şifre"
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.errors.password && formik.touched.password && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.password}
                                </div>
                            )
                        }
                    </div>

                    <Button color="purple" fluid size="large" type="submit" style={{marginTop:"1em"}}>
                        Giriş Yap
                    </Button>
                </Segment>
            </Form>
            <Message info>
                Kayıtlı değilmisin? <b><Link  to={"/register"}>Şimdi Kaydol</Link></b>
            </Message>
        </div>
    );
}