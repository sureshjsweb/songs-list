import { useEffect, useState } from 'react';
import { computePageItems } from '../../utils/Utils.service';
import { DEFAULT_EDIT, DEFAULT_PAGEITEM, DEFAULT_PAGESIZE, DEFAULT_QUERY, DEFAULT_EDITROW } from '../../constants/Constants';
import Select from '../Select/Select';
import Search from './../Search/Search';
import Table from './../Table/Table';
import Pagination from '../Pagination/Pagination';

const DataTable = ({ list }) => {

  const [pageSize, setPageSize] = useState(DEFAULT_PAGESIZE);
  const [pageItem, setPageItem] = useState(DEFAULT_PAGEITEM);
  const [searchQuery, setSearchQuery] = useState(DEFAULT_QUERY);
  const [editRow, setEditRow] = useState(DEFAULT_EDITROW);

  useEffect(() => {
    list.length && setPageItem(computePageItems(list, pageSize));
  }, [pageSize, list, searchQuery]);

  return (
    <>
      <section>
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
      </section>
      <section>
        <Table pageItem={pageItem} setPageItem={setPageItem} customStyle={{ width: '300px' }} list={list} pageSize={pageSize}></Table>
      </section>
      <section>
        <Pagination pageItem={pageItem} setPageItem={setPageItem} pageSize={pageSize} list={list}></Pagination>
      </section>
    </>
  );
};

export default DataTable;
