import axios from 'axios';

const PROGRAM_API_BASE_URL = "http://192.168.0.101:8008//programs";

class ProgramService {

    showAllPrograms(){
        return axios.get(PROGRAM_API_BASE_URL);
    }

    createProgram(p){
        return axios.post(PROGRAM_API_BASE_URL, p);
    }

    viewProgram(trainingId){
        return axios.get(PROGRAM_API_BASE_URL + '/' + trainingId);
    }

    updateProgram(p){
        //return axios.put(EMPLOYEE_API_BASE_URL+'updateTrianer123',emp);
        return axios.put(PROGRAM_API_BASE_URL, p);
    }

    deleteProgram1(p){
        console.log(p)
        //return axios.delete(PROGRAM_API_BASE_URL , p);
        return axios.delete(PROGRAM_API_BASE_URL, { data: {trainingId:p}, headers: {} });
    }
}

export default new ProgramService()