import React from 'react'
import Sidebar from './Sidebar'
import { Grid, GridRow} from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import {Route} from "react-router-dom";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import {ToastContainer} from "react-toastify";

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
                            <Route exact path = "/" component={JobAdvertisementList}/>
                            <Route exact path = "/jobAdvertisement" component={JobAdvertisementList}/>
                            <Route path = "/jobAdvertisement/:description" component={JobAdvertisementDetail}/>
                        </Grid.Column>
                    </GridRow>
                </Grid>
        </div>
    )
}
