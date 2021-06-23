import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import DataTable from "../DataTable/DataTable";
import NewForm from './../NewForm/NewForm';

const Home = ({ list }) => {

    return (
        <Router>
            <div style={{ padding: '10px' }}>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink to="/">Songs List</NavLink>
                        </li>
                        <li className="nav-item" style={{ paddingLeft: '10px' }}>
                            <NavLink to="/new">Add New Song</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/new">
                        <NewForm mode='NEW' row={{
                            id: Math.floor(Math.random() * 1000),
                            song_name: '',
                            album_name: '',
                            lyric_text: '',
                            vote: 0
                        }}></NewForm>
                    </Route>
                    <Route path="/">
                        <DataTable list={list} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Home;