import React, { useEffect, useState } from 'react'
import JobTitleServices from '../services/jobTitleService'
import { Icon, Menu, Table } from 'semantic-ui-react'

export default function JobTitleList() {
    const [titles, setJobTitles] = useState([])

    useEffect(() => {
        let jobTitleService = new JobTitleServices()
        jobTitleService.getJobtitles().then(result => setJobTitles(result.data.data))
    }, [])
    return (
        <div>
            <Table called>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Ünanı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        titles.map((title) => (
                            <Table.Row key={title.id}>
                                <Table.Cell>{title.title}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}


