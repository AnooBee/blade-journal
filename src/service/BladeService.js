import axios from 'axios'

const URL = 'http://localhost:8080';
const GET_ALL_BLADE_URI = 'v1/blades';

class BladeService {

    retriveAllBlades() {
        return axios.get('http://localhost:8080/v1/blades');
    }
}

export default new BladeService ()
