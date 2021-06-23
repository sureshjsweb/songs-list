import { useState, useEffect } from 'react';
import { computePageItems } from './DataTable.service';
import Select from '../Select/Select';
import Search from './../Search/Search';
import Table from './../Table/Table';

const DataTable = ({ list }) => {

  const [pageSize, setPageSize] = useState(25);
  const [pageItem, setPageItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    list.length && setPageItem(computePageItems(list, pageSize));
  }, [pageSize]);

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} pageItem={pageItem} setPageItem={setPageItem}></Search>
      <Select style={{ float: 'right' }} label="No of Page items" setPageSize={setPageSize} noOfItems={[10, 20, 25, 50]}></Select>
      <Table pageItem={pageItem}></Table>
    </>
  );
};

export default DataTable;
