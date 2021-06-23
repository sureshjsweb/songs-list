import { onSearch } from "../DataTable/DataTable.service";

const Search = ({ searchQuery, setSearchQuery, pageItem, setPageItem }) => {
    return (<><input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /><button onClick={(e) => setPageItem(onSearch(pageItem, searchQuery))}>Search</button><button>Clear</button></>);
}

export default Search;