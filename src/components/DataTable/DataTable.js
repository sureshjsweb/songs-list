import { useState, useEffect } from 'react';
import { computePageItems } from '../Common.service';
import { DEFAULT_PAGEITEM, DEFAULT_PAGESIZE, DEFAULT_QUERY } from '../../constants/Constants';
import Select from '../Select/Select';
import Search from './../Search/Search';
import Table from './../Table/Table';

const DataTable = ({ list }) => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGESIZE);
  const [pageItem, setPageItem] = useState(DEFAULT_PAGEITEM);
  const [searchQuery, setSearchQuery] = useState(DEFAULT_QUERY);

  useEffect(() => {
    list.length && setPageItem(computePageItems(list, pageSize));
  }, [pageSize, list, searchQuery]);

  return (
    <>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        pageItem={pageItem}
        setPageItem={setPageItem}></Search>
      <Select
        style={{ float: 'right' }}
        label="No of Page items"
        setPageSize={setPageSize}
        noOfItems={[10, 20, 25, 50]}
        dValue={DEFAULT_PAGESIZE}></Select>
      <Table pageItem={pageItem} setPageItem={setPageItem} customStyle={{ width: '500px' }} list={list} pageSize={pageSize}></Table>
    </>
  );
};

export default DataTable;
