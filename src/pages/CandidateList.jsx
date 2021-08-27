import React, { useState, useEffect } from "react";
import CandidateServices from "../services/candidateService";
import { Table } from "semantic-ui-react";

export default function CandidateList() {

    const [candidateLists, setcandidateLists] = useState([]);


    useEffect(() => {
        let candidateService = new CandidateServices();

        candidateService.getCandidates().then((result) => {
            setcandidateLists(result.data.data);
        });
    }, []);

    return (
        <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Nationality Id</Table.HeaderCell>
                        <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {

                        candidateLists.map((candidate) => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.email}</Table.Cell>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.identityNumber}</Table.Cell>
                                <Table.Cell>{candidate.birthDate}</Table.Cell>
                            </Table.Row>
                        ))

                    }
                </Table.Body>
            </Table>
        </div>
    );
}