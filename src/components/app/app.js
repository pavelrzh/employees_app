import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';
import EmloyeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'John D.', salary: 700, increase: false, id: 1},
        {name: 'Peter P.', salary: 1500, increase: true, id: 2},
        {name: 'William E.', salary: 1800, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmloyeesAddForm/>
        </div>
    );
}

export default App;