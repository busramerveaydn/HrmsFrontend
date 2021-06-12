import React from 'react'
import Sidebar from './Sidebar'
import { Grid, GridRow} from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}
