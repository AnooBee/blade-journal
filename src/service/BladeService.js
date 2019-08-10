import axios from 'axios'

const URL = 'http://localhost:8080';
const GET_ALL_BLADE_URI = 'v1/blades';

class BladeService {

    retriveAllBlades() {
        return axios.get('http://localhost:8080/v1/blades');
    }

    deleteBlade(id) {
        console.log("in service...deleteblade")
        return axios.delete(`http://localhost:8080/v1/blades/${id}`);
    }
}

export default new BladeService ()
