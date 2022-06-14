import { Component } from 'react';
import './employees-add-form.css';

class EmloyeesAddForm extends Component {
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
    addEmployee = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);

        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
    const {name, salary} = this.state;

        return (
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                onSubmit={this.addEmployee}
                className="add-form d-flex">
                <input type="text"
                    onChange={this.onValueChange}
                    className="form-control new-post-label"
                    name='name'
                    value={name}
                    placeholder="Введите имя сотрудника"
                    required
                    minLength={2} />
                <input type="number"
                    onChange={this.onValueChange}
                    className="form-control new-post-label"
                    name='salary'
                    value={salary}
                    placeholder="З/П в $?"
                    required />
                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
        );
    }
    
};

export default EmloyeesAddForm;