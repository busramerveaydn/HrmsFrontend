import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import {Button,Form, Grid, Header, Image, Message, Segment,} from "semantic-ui-react";
import CandidateServices from "../services/candidateService"
import { useFormik } from "formik";
import { toast } from "react-toastify";

export default function Register() {

    let candidateService = new CandidateServices();
    const candidateRegisterSchema = Yup.object().shape({
        birthDate: Yup.date().required("Doğum Tarihi Zorunludur!"),
        email: Yup.string().required("Email Alanı Zorunludur!").email("Geçerli Bir Email Değil!"),
        reEmail: Yup.string().oneOf([Yup.ref("email"),null],"Email Bilgileri Birbiri İle Eşleşmıyor!").required("Email Tekrar Zorunludur!"),
        firstName: Yup.string().required("İsim Zorunludur!"),
        lastName: Yup.string().required("Soy İsim Zorunludur!"),
        nationalNumber: Yup.string().required("Kimlik Numarası Zorunludur!").length(11,"Kımlık Numarası Hatalı!").matches(/^[0-9]+$/, "Sadece Rakam Girilmelidir!"),
        password: Yup.string().required("Şifre Zorunludur!").min(6,"Şifre En Az 6 Karakter Uzunlugunda Olmalıdır!"),
        rePassword: Yup.string().oneOf([Yup.ref("password"),null], "Şifreler Eşleşmiyor!")
    });

    const history = useHistory();

    const formik= useFormik({
        initialValues: {
            birthDate:"",
            email:"",
            firstName:"",
            lastName:"",
            nationalNumber:"",
            password:"",
            rePassword:"",
        },
        validationSchema: candidateRegisterSchema,
        onSubmit:(values) => {
            candidateService.registerCandidate(values).then((result) => {
                toast.success(result.data.message)
                history.push("/SignedIn")
            })
                .catch((result) => {
                    toast.error(result.response.data.message)
                })
        }
    });

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName,value);
    }

    return (
        <div>
            <Header as="h2" color="teal" textAlign="center">
                <Image src="https://static.wixstatic.com/media/079eb3_0ecc4bea05cd48a5a8d698df497a57e6~mv2.jpg/v1/fill/w_373,h_160,al_c,q_80,usm_0.66_1.00_0.01/Ekran%2520G%25C3%25B6r%25C3%25BCnt%25C3%25BCs%25C3%25BC%2520.webp" circular  />
            </Header>
            <Form size="large" onSubmit={formik.handleSubmit}>
                <Segment stacked>
                    <Grid stackable>
                        <Grid.Column width={8}>
                            <div style={{marginTop:"1em"}}>
                                <label><b>İsim</b></label>

                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="İsim"
                                    type="text"
                                    value={formik.values.firstName}
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.firstName && formik.touched.firstName && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.firstName}
                                        </div>
                                    )
                                }
                            </div>
                            <div style={{marginTop:"1em"}}>
                                <label><b>Soy İsim</b></label>
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Soy isim"
                                    type="text"
                                    value={formik.values.lastName}
                                    name="lastName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.lastName && formik.touched.lastName && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.lastName}
                                    </div>
                                )}
                            </div>
                            <div style={{marginTop:"1em"}}>
                                <label><b>Kimlik Numarası</b></label>
                                <Form.Input
                                    fluid
                                    icon="id card"
                                    iconPosition="left"
                                    placeholder="Kimlik numarası"
                                    type="text"
                                    value={formik.values.nationalNumber}
                                    name="nationalNumber"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.nationalNumber && formik.touched.nationalNumber && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.nationalNumber}
                                    </div>
                                )}
                            </div>
                            <div style={{marginTop:"1em"}}>
                                <label><b>Doğum Tarihi</b></label>
                                <Form.Input
                                    fluid
                                    icon="calendar times"
                                    iconPosition="left"
                                    placeholder="Dogum tarihi"
                                    type="date"
                                    error={Boolean(formik.errors.birthDate)}
                                    onChange={(event, data) =>
                                        handleChangeSemantic(data.value, "birthDate")
                                    }
                                    value={formik.values.birthDate}
                                    onBlur={formik.handleBlur}
                                    name="birthDate"
                                />
                                {formik.errors.birthDate && formik.touched.birthDate && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.birthDate}
                                    </div>
                                )}
                            </div>
                        </Grid.Column>

                        <Grid.Column width={8}>
                            <div style={{marginTop:"1em"}}>
                                <label><b>Email</b></label>
                                <Form.Input
                                    fluid
                                    icon="mail"
                                    iconPosition="left"
                                    placeholder="E-mail adresi"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="email"
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.email}
                                    </div>
                                )}
                            </div>
                            <div style={{marginTop:"1em"}}>
                                <label><b>Email Tekrar</b></label>
                                <Form.Input
                                    fluid
                                    icon="mail"
                                    iconPosition="left"
                                    placeholder="E-mail adresi tekrar"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="reEmail"
                                />
                                {formik.errors.reEmail && formik.touched.reEmail && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.reEmail}
                                    </div>
                                )}
                            </div>
                            <div style={{marginTop:"1em"}}>
                                <label><b>Şifre</b></label>
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Şifre"
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="password"
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.password}
                                    </div>
                                )}
                            </div>
                            <div style={{marginTop:"1em"}}>
                                <label><b>Şifre Tekrar</b></label>
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Şifre tekrar"
                                    type="password"
                                    value={formik.values.rePassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="rePassword"
                                />
                                {formik.errors.rePassword && formik.touched.rePassword && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.rePassword}
                                    </div>
                                )}
                            </div>
                        </Grid.Column>
                    </Grid>

                    <br/>
                    <Button color="purple" fluid size="large" type="submit">
                        Kayıt Ol
                    </Button>
                </Segment>
            </Form>
        </div>
    );
}
























