import { useState } from 'react';
import { CompareAlbumName, CompareSongName, CompareLyric } from '../Common.service';
import NewForm from '../NewForm/NewForm';
import Filter from './../Filter/Filter';

const Table = ({ customStyle, pageItem, setPageItem, list, pageSize }) => {

    const [edit, setEdit] = useState('');
    const [editRow, setEditRow] = useState({});

    const onNew = () => {
        setEdit('NEW');
        setEditRow({
            id: Math.floor(Math.random() * 1000),
            song_name: '',
            album_name: '',
            lyric_text: '',
            upvote: 0,
            downvote: 0
        });
    };

    const onEdit = (row) => {
        setEdit('EDIT');
        setEditRow(row);
    };

    const onUpdate = (updateSong) => {
        setPageItem([...pageItem.filter(it => it.id !== updateSong.id), updateSong]);
        setEdit('');
    };

    const onDelete = (row) => {
        pageItem = [...pageItem.filter(it => it.id !== row.id)];
        setPageItem([...pageItem.filter((it, index) => index < pageSize)]);
    };

    return (
        <>
            <button className="btn btn-primary text-right" type="submit" onClick={onNew}>New</button>
            {edit ? <NewForm isEdit={edit} row={editRow} onUpdate={onUpdate}></NewForm> :
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Song Name <Filter sort={CompareSongName} pageItem={pageItem} setPageItem={setPageItem}></Filter></th>
                            <th scope="col">Album Name <Filter sort={CompareAlbumName} pageItem={pageItem} setPageItem={setPageItem}></Filter></th>
                            <th scope="col" style={customStyle}>Lyric <Filter sort={CompareLyric} pageItem={pageItem} setPageItem={setPageItem}></Filter></th>
                            <th scope="col">Up Vote</th>
                            <th scope="col">Down Vote</th>
                            <th scope="col">Action</th>
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
                                <td><button onClick={e => onEdit(l)}>Edit</button><button onClick={e => onDelete(l)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </>
    );
}

export default Table;