import './app-info.css';

const AppInfo = (props) => {
    const {count, increased} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании ТТК</h1>
            <h2>Общее число сотрудников: {count}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
};

export default AppInfo;
