import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';
import EmloyeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John D.', salary: 700, increase: false, rise: true, id: 1},
                {name: 'Peter P.', salary: 1500, increase: true, rise: false, id: 2},
                {name: 'William E.', salary: 1800, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = this.state.data.length;
    }
        
       
    deleteItem = (id) => {
    this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
        }
    })
    }

    addItem = (name, salary) => {
        if (name && salary) {
            let newItem = {name, salary, increase: false, rise: false, id: ++this.maxId}
        this.setState(({data}) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        })
        }
    }

    onToggleProp = (id, prop) => {
        this.setState (({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(elem => {
            return elem.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmployees = (items, filter) => {
        switch (filter) {
            case 'grade':
                return items.filter(elem => elem.rise);
            case 'moreThen1000':
                return items.filter(elem => elem.salary > 1000);
            default:
                return items;
        }
    }

    onFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const countEmployees = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterEmployees(this.searchEmployees(data, term), filter);
        return (
            <div className="app">
                <AppInfo
                    count={countEmployees}
                    increased={increasedEmployees}/>
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                    filter={filter}
                    onFilter={this.onFilter}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmloyeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }

    
}

export default App;