import { CompareAlbumName, CompareSongName } from '../Common.service';
import { CompareLyric } from './../Common.service';
import Filter from './../Filter/Filter';

const Table = ({ customStyle, pageItem, setPageItem }) => {
    return (<table className="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Song Name <Filter sort={CompareSongName} pageItem={pageItem} setPageItem={setPageItem}></Filter></th>
                <th scope="col">Album Name <Filter sort={CompareAlbumName} pageItem={pageItem} setPageItem={setPageItem}></Filter></th>
                <th scope="col" style={customStyle}>Lyric <Filter sort={CompareLyric} pageItem={pageItem} setPageItem={setPageItem}></Filter></th>
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
    </table>);
}

export default Table;