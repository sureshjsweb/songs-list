import { useEffect, useState } from 'react';
import { computePageItems } from '../../utils/Utils.service';
import { DEFAULT_PAGEITEM, DEFAULT_PAGESIZE, DEFAULT_QUERY } from '../../constants/Constants';
import Select from '../Select/Select';
import Search from './../Search/Search';
import Table from './../Table/Table';
import Pagination from '../Pagination/Pagination';

const DataTable = ({ list, setMode, mode }) => {

  const [pageSize, setPageSize] = useState(DEFAULT_PAGESIZE);
  const [pageItem, setPageItem] = useState(DEFAULT_PAGEITEM);
  const [searchQuery, setSearchQuery] = useState(DEFAULT_QUERY);

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
        <Table pageItem={pageItem} setPageItem={setPageItem} list={list} pageSize={pageSize} mode={mode} setMode={setMode} customStyle={{ width: '300px' }}></Table>
      </section>
      <section style={{ textAlign: 'right' }}>
        <Pagination pageItem={pageItem} setPageItem={setPageItem} pageSize={pageSize} list={list}></Pagination>
      </section>
    </>
  );
};

export default DataTable;
