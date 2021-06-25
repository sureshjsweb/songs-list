import { onSearch } from "../../utils/Utils.service";
import { DEFAULT_QUERY } from './../../constants/Constants';

const Search = ({ searchQuery, setSearchQuery, pageItem, setPageItem }) => {

    return (<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <input
            type="text"
            style={{ width: "30%" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
            placeholder="Enter text to search" />
        <button className="ml-1 mr-1 btn btn-primary" onClick={(e) => setPageItem(onSearch(pageItem, searchQuery))}>Search</button>
        <button className="btn btn-danger" onClick={(e) => setSearchQuery(DEFAULT_QUERY)}>Clear</button>
    </div>);
}

export default Search;