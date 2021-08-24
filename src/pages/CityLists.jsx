import React, { useState, useEffect } from "react";
import {Dropdown } from 'semantic-ui-react';
import CityService from "../services/cityService";

export default function CitiesList() {
    const [cityLists, setCityLists] = useState([]);

    useEffect(()=>{
        let cityService = new CityService();

        cityService.getCities().then((result)=>{
            setCityLists(result.data.data);
        }); },[]);

    return (
        <div >
            <Dropdown text='Şehirler' search selection >
                <Dropdown.Menu >
                    {
                        cityLists.map((city) => (
                            <Dropdown.Item key={city.id}>{city.cityName}</Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}