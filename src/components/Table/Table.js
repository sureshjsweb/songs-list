import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/fontawesome-free-solid';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CompareAlbumName, CompareSongName, CompareLyric } from '../../utils/Utils.service';
import Filter from './../Filter/Filter';

const Table = ({ customStyle, pageItem, setPageItem, list, pageSize, setMode, mode }) => {
    let voteStyle = { cursor: 'pointer' };
    const history = useHistory();
    const location = useLocation();

    const onEdit = (row) => {
        setMode('EDIT');
        history.push({ pathname: '/edit', state: row });
    };

    const onDelete = (row) => {
        pageItem = [...pageItem.filter(it => it.id !== row.id)];
        setPageItem([...pageItem.filter((it, index) => index < pageSize)]);
    };

    const onUpVote = (row, i) => {
        let tempRow = { ...row };
        tempRow.upVote = tempRow.upVote + 1;
        pageItem[i] = { ...tempRow }
        setPageItem([...pageItem]);
    }

    const onDownVote = (row, i) => {
        let tempRow = { ...row };
        tempRow.downVote = tempRow.downVote + 1;
        pageItem[i] = { ...tempRow }
        setPageItem([...pageItem]);
    }

    useEffect(() => {
        // let id = parseInt(location.state.id);
        // let newData = [{ ...location.state }, ...pageItem.filter(it => it.id !== id)];
        // console.log(newData);
        // setPageItem([...newData]);
    }, [mode])

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Song Name <span><Filter sort={CompareSongName} pageItem={pageItem} setPageItem={setPageItem}></Filter></span></th>
                        <th scope="col">Album Name <Filter sort={CompareAlbumName} pageItem={pageItem} setPageItem={setPageItem}></Filter></th>
                        <th scope="col" style={customStyle}>Lyric <Filter sort={CompareLyric} pageItem={pageItem} setPageItem={setPageItem}></Filter></th>
                        <th scope="col">Up Vote</th>
                        <th scope="col">Down Vote</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pageItem.map((l, i) => (
                        <tr key={l.id}>
                            <td>{l.id}</td>
                            <td>{l.song_name}</td>
                            <td>{l.album_name}</td>
                            <td>{l.lyric_text}</td>
                            <td><div>{l.upVote}</div><div><FontAwesomeIcon icon={faThumbsUp} onClick={(e) => onUpVote(l, i)} style={voteStyle} /></div></td>
                            <td><div>{l.downVote}</div><div><FontAwesomeIcon icon={faThumbsDown} onClick={(e) => onDownVote(l, i)} style={voteStyle} /></div></td>
                            <td><button className="btn btn-success" onClick={e => onEdit(l)}>Edit</button><button className="btn btn-danger" onClick={e => onDelete(l)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table;