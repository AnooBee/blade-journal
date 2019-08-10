import axios from 'axios'

class BladeService {

    retriveAllBlades() {
        return axios.get('http://localhost:8080/v1/blades');
    }

    deleteBlade(id) {
        console.log("in service...deleteblade")
        return axios.delete(`http://localhost:8080/v1/blades/${id}`);
    }

    retrieveBlade(id) {
        return axios.get(`http://localhost:8080/v1/blades/${id}`);
    }
}

export default new BladeService ()
