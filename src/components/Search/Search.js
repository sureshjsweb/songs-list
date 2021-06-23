import { onSearch } from "../Common.service";
import { DEFAULT_QUERY } from './../../constants/Constants';

const Search = ({ searchQuery, setSearchQuery, pageItem, setPageItem }) => {
    return (<>
        <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={(e) => setPageItem(onSearch(pageItem, searchQuery))}>Search</button>
        <button onClick={(e) => setSearchQuery(DEFAULT_QUERY)}>Clear</button>
    </>);
}

export default Search;