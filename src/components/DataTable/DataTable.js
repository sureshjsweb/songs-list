const DataTable = ({ list }) => {
  return (
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
        {list.map((l) => (
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
  );
};

export default DataTable;
