import React from "react";
import {Dropdown, Input} from "semantic-ui-react";
import CandidateList from "../../pages/CandidateList";

const tagOptions =[
    {
        key: "Important",
        text: "Important",
        value: "Important",
        label: {color:"red", empty:true,circular:true},
    },
];
export default function CandidateButton(){
    return(
        <div>
          <Dropdown
              text="Adaylar"
              icon="address card outline"
              floating
              labeled
              button
              size="large"
              className="icon"
          >
              <Dropdown.Menu>
                  <Input icon="search" iconPosition="left" className="search"/>
                  <Dropdown.Divider/>
                  <Dropdown.Header icon="tags" content="Tag Label"/>
                  <Dropdown.Menu>
                      {tagOptions.map((option)=>(
                          <Dropdown.Item key={option.value} {...option}/>
                      ))}
                  </Dropdown.Menu>
              </Dropdown.Menu>

          </Dropdown>
        </div>
    )
}