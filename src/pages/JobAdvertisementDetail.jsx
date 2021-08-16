import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Button, Card, Image} from 'semantic-ui-react'
import JobadvertisementServices from "../services/jobadvertisementService";

export default function JobAdvertisementDetail() {

    let { name } = useParams()

    const [job, setJob] = useState({})

    useEffect(() => {
        let jobadvertisementService = new JobadvertisementServices()
        jobadvertisementService.getJobAdvertisements(name).then(result => setJob(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{job.description}</Card.Header>
                        <Card.Meta>İş İlanı</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Başvur
                            </Button>
                            <Button basic color='red'>
                                Favorilere Ekle
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
