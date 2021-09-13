import React, {useEffect, useState} from 'react'
import {Button, Dropdown, Icon, Input, Label, Menu} from 'semantic-ui-react'
import CityLists from "../pages/CityLists";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import {Link, Route} from "react-router-dom";
import CityService from "../services/cityService";
import CandidateButton from "../components/NaviBarComponents/CandidateButton";

export default function Sidebar() {
    const candidate =()=>{
        // iş arayana göre listeler
    }
    return (
        <div>
        <Menu inverted vertical >
                <Menu.Item as={Link} to={"/jobAdvertisement"} name='Job Advertisements' icon="labeled" position="center">
                    <Icon name="list" />
                    <Label color='blue'>2</Label>
        İş İlanları
        </Menu.Item>
                <Menu.Item name='Employees' icon="labeled" position="center">
                    <Icon name="suitcase" />
                    <Label color='black'></Label>
          İş Verenler
        </Menu.Item>
          {/*      <Menu.Item name='Recorded' icon="labeled" position="center">*/}
          {/*          <Icon name="bookmark" />*/}
          {/*          <Label color='red'>1</Label>*/}
          {/*Kaydedilenler*/}
        {/*</Menu.Item>*/}
                <Menu.Item name='Users' icon="labeled" position="center">
                    <Icon name="user" />
                    <Label color='black'></Label>
          Kullanıcılar
        </Menu.Item>
            <Menu.Item onClick={candidate}>

                <CandidateButton></CandidateButton>

            </Menu.Item>
                            <Menu.Item>
                    <Input icon='search' placeholder='İş İlanı Arayın...' />
                </Menu.Item>

            </Menu>

        </div>
    )
}
