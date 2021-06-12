import axios from "axios"

export default class JobTitleServices{
    getJobtitles(){
        return axios.get("http://localhost:8080/api/titles/getall")
    }
}
