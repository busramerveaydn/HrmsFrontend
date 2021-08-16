import React, { useEffect, useState } from 'react'
import JobadvertisementServices from '../services/jobadvertisementService'
import {Button, Table } from 'semantic-ui-react'
import {Link} from "react-router-dom";




export default function JobAdvertisementList() {



    const [jobAdvertisements, setJobAdvertisements] = useState([])

    //compannet yüklendiğinde yapılması istenen kod yazılır.
    useEffect(() => {
        let jobadvertisementService = new JobadvertisementServices()
        jobadvertisementService.getJobAdvertisements().then(result => {
            setJobAdvertisements(result.data.data)
        })
    }, [])


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Maksimum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map((jobAdvertisement) => (

                            <Table.Row key={jobAdvertisement.id}>
                            <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.quota}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.applicationDeadLine}</Table.Cell><Table.Cell><Button color={"white"} ><Link to={`/jobAdvertisement/${jobAdvertisement.description}`}>DETAY</Link></Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
