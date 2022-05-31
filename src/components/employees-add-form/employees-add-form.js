import { Component } from 'react';
import './employees-add-form.css';

class EmloyeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
    const {name, salary} = this.state;

        return (
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    onChange={this.onValueChange}
                    className="form-control new-post-label"
                    name='name'
                    value={name}
                    placeholder="Введите имя сотрудника" />
                <input type="number"
                    onChange={this.onValueChange}
                    className="form-control new-post-label"
                    name='salary'
                    value={salary}
                    placeholder="З/П в $?" />
    
                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
        );
    }
    
};

export default EmloyeesAddForm;