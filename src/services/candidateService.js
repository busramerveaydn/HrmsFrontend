import axios from "axios";

export default class CandidateServices{
    getCandidate(){
        return axios.get("http://localhost:8080/api/candidates/gettAllCandidate")
    }
}
