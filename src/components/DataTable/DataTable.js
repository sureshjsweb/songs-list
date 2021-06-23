import { useState, useEffect } from 'react';
import { computePageItems } from './DataTable.service';
import Select from '../Select/Select';

const DataTable = ({ list }) => {

  const [pageSize, setPageSize] = useState(25);
  const [pageItem, setPageItem] = useState([]);

  useEffect(() => {
    list.length && setPageItem(computePageItems(list, pageSize));
  }, [pageSize]);

  return (
    <>
      <Select style={{ float: 'right' }} label="No of Page items" setPageSize={setPageSize} noOfItems={[10, 25, 50]}></Select>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Song Name</th>
            <th scope="col">Album Name</th>
            <th scope="col">Lyric</th>
            <th scope="col">Up Vote</th>
            <th scope="col">Down Vote</th>
          </tr>
        </thead>
        <tbody>
          {pageItem.map((l) => (
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>{l.song_name}</td>
              <td>{l.album_name}</td>
              <td>{l.lyric_text}</td>
              <td>{l.upvote}</td>
              <td>{l.downvote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
