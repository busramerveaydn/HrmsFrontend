import React from 'react'
import Sidebar from './Sidebar'
import { Grid, GridRow} from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobAdvertisementList/>
                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}
