import axios from 'axios';



const EMPLOYEE_API_BASE_URL = "http://localhost:8004/";

class FacultyService { 

    viewAllTrainers(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/viewAllTrainerEntity');
    }

    addTrainer(emp){
        return axios.post(EMPLOYEE_API_BASE_URL + '/addtrainer', emp);
    }

    viewTrainer(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL +'viewTrainer/'+ employeeId);
    }

    updateTrainer321(emp){
        console.log(emp);
        
        return axios.put(EMPLOYEE_API_BASE_URL+'updateTrianer123',emp);
        
    }

    removeTrainer(emp){
       
       return axios.delete(EMPLOYEE_API_BASE_URL+'removeTrinerEntity', { data: { employeeId: emp }});
    }
}

export default new FacultyService() 