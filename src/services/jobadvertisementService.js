import axios from "axios"

export default class JobadvertisementServices{

    getJobAdvertisements(){

        return axios.get("http://localhost:8080/api/jobAdvertisemens/getall")
        
    }
}
