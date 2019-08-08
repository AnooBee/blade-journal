import React, {Component} from 'react';
import BladeService from '../service/BladeService'

class BladeList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            blades:[],
            message: null
        }
        this.refreshBlades = this.refreshBlades.bind(this)
    }

    componentDidMount() {
        this.refreshBlades();
    }

    refreshBlades() {
        BladeService.retriveAllBlades()
            .then(
                response => {
                    console.log(response);
                    this.setState({blades:response.data});
                }
            )
    }
    render() {
        return  (
            <div className="container">
                <h3>All Blades</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Stars</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.blades.map(
                                    blade =>
                                        <tr key={blade.id}>
                                            <td>{blade.id}</td>
                                            <td>{blade.name}</td>
                                            <td>{blade.stars}</td>
                                            <td>{blade.notes}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default BladeList;