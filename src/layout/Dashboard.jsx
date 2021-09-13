import React, {useState} from 'react'
import Sidebar from './Sidebar'
import { Grid, GridRow} from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import {Link, Route} from "react-router-dom";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import {ToastContainer} from "react-toastify";
import CityLists from "../pages/CityLists";
import CandidateList from "../pages/CandidateList";
import Register from "../pages/Register";
import Out from "./Out";
import Login from "../pages/Login";

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
                <Grid>
                    <GridRow>
                        <Grid.Column width={4}>
                            <Sidebar />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Route exact path="/out" component={Out} />
                            <Route exact path="/login" component={Login}/>
                            <Route exact path = "/" component={JobAdvertisementList}/>
                            <Route exact path = "/jobAdvertisement" component={JobAdvertisementList}/>
                            <Route exact path = "/jobAdvertisement/:id" component={JobAdvertisementDetail}/>
                            <Route exact path="/register" component={Register}/>
                        </Grid.Column>
                    </GridRow>
                </Grid>
        </div>
    )
}
