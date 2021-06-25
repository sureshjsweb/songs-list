import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/fontawesome-free-solid';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CompareAlbumName, CompareSongName, CompareLyric } from '../../utils/Utils.service';
import Filter from './../Filter/Filter';
import ModalWindow from '../ModalWindow/ModalWindow';
import "./Table.css";

const Table = ({ customStyle, pageItem, setPageItem, list, pageSize, setMode, mode }) => {
    const [show, setShow] = useState(false);
    const [row, setRow] = useState({});
    const [sorting, setSorting] = useState({
        filterBy: '',
        asc: false,
        dsc: false
    });

    let voteStyle = { cursor: 'pointer' };
    const history = useHistory();

    const onEdit = (row) => {
        setMode('EDIT');
        history.push({ pathname: '/edit', state: row });
    };

    const onUpVote = (row, i) => {
        let tempRow = { ...row };
        tempRow.upVote = 1;
        tempRow.downVote = 0;
        pageItem[i] = { ...tempRow }
        setPageItem([...pageItem]);
    }

    const onDownVote = (row, i) => {
        let tempRow = { ...row };
        tempRow.upVote = 0;
        tempRow.downVote = 1;
        pageItem[i] = { ...tempRow }
        setPageItem([...pageItem]);
    }

    const onDelete = () => {
        pageItem = [...pageItem.filter(it => it.id !== row.id)];
        setPageItem([...pageItem.filter((it, index) => index < pageSize)]);
        setShow(false);
    };

    const confirmDelete = (row) => {
        setShow(true);
        setRow(row);
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {

    }, [mode])

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Song Name <span><Filter sort={CompareSongName} pageItem={pageItem} setPageItem={setPageItem} sorting={sorting} setSorting={setSorting} filter='song'></Filter></span></th>
                        <th scope="col">Album Name <Filter sort={CompareAlbumName} pageItem={pageItem} setPageItem={setPageItem} sorting={sorting} setSorting={setSorting} filter='album'></Filter></th>
                        <th scope="col" style={customStyle}>Lyric <Filter sort={CompareLyric} pageItem={pageItem} setPageItem={setPageItem} sorting={sorting} setSorting={setSorting} filter='lyric'></Filter></th>
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
                            <td><div className={(l.upVote === 1) ? 'voteActive' : 'voteInActive'}>{l.upVote}</div><div><FontAwesomeIcon icon={faThumbsUp} className={(l.upVote === 1) ? 'voteActive' : 'voteInActive'} onClick={(e) => onUpVote(l, i)} style={voteStyle} /></div></td>
                            <td><div className={(l.downVote === 1) ? 'voteActive' : 'voteInActive'}>{l.downVote}</div><div><FontAwesomeIcon icon={faThumbsDown} className={(l.downVote === 1) ? 'voteActive' : 'voteInActive'} onClick={(e) => onDownVote(l, i)} style={voteStyle} /></div></td>
                            <td><button className="btn btn-sm mr-1 ml-1 btn-success" onClick={e => onEdit(l)}>Edit</button><button className="btn btn-sm ml-1 mr-1 btn-danger" onClick={e => confirmDelete(l)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalWindow show={show} handleClose={handleClose} onDelete={onDelete}></ModalWindow>
        </div>
    );
}

export default Table;