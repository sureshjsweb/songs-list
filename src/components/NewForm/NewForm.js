import { useState } from 'react';
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

const NewForm = ({ mode }) => {
    const location = useLocation();
    const [song, setSong] = useState(mode === 'NEW' ? {
        id: Math.floor(Math.random() * 1000),
        song_name: '',
        album_name: '',
        lyric_text: '',
        vote: 0
    } : { ...location.state });

    let title = (mode === 'EDIT') ? "Edit Song Detail" : "New Song Detail";

    const set = name => {
        return ({ target: { value } }) => {
            setSong((oldValues) => ({ ...oldValues, [name]: value }));
        }
    }

    const onUpdate = (e) => {
        e.preventDefault();
        // setPageItem([...pageItem.filter(it => it.id !== song.id), { ...song }]);
        // setEdit('');
    };

    return (
        <form>
            <h1 className="text-center">{title}</h1>
            <div className="container">
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input type="text" className="form-control" defaultValue={song.id} readOnly />
                </div>
                <div className="mb-3">
                    <label className="form-label">Song Name</label>
                    <input type="text" className="form-control" value={song.song_name} onChange={set('song_name')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Album Name</label>
                    <input type="text" className="form-control" value={song.album_name} onChange={set('album_name')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Lyric</label>
                    <input type="text" className="form-control" value={song.lyric_text} onChange={set('lyric_text')} />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={onUpdate}>{mode === 'EDIT' ? 'Update' : 'Save'}</button><button className="btn btn-danger" type="submit">Cancel</button>
                </div>
            </div>
        </form>
    );
}

NewForm.propTypes = {
    song_name: PropTypes.string.isRequired,
    album_name: PropTypes.string.isRequired
};

export default NewForm;