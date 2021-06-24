import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DataTable from "../DataTable/DataTable";
import NewForm from './../NewForm/NewForm';

const Home = ({ list, setList }) => {
    const [mode, setMode] = useState('');

    useEffect(() => {

    }, [mode]);

    return (
        <Router>
            <div style={{ padding: '10px' }}>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/">Songs List</Link>
                        </li>
                        <li className="nav-item" style={{ paddingLeft: '20px' }} onClick={() => setMode('NEW')}>
                            <Link to="/new">Add New Song</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/new">
                        <NewForm mode={mode} setMode={setMode} list={list} setList={setList}></NewForm>
                    </Route>
                    <Route path="/edit">
                        <NewForm mode={mode} setMode={setMode} list={list} setList={setList}></NewForm>
                    </Route>
                    <Route path="/">
                        <DataTable list={list} mode={mode} setMode={setMode} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Home;