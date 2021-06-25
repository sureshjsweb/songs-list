import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { useHistory, useLocation } from 'react-router-dom';

const NewForm = ({ mode, setMode, list, setList }) => {
    const location = useLocation();
    const history = useHistory();
    let row = {
        id: list.length,
        song_name: '',
        album_name: '',
        lyric_text: '',
        upVote: 0,
        downVote: 0
    };
    if (location && location.state) {
        row = { ...location.state };
    }
    const [song, setSong] = useState(row);

    let title = (mode === 'EDIT') ? "Edit Song Detail" : "New Song Detail";

    const set = name => {
        return ({ target: { value } }) => {
            setSong((oldValues) => ({ ...oldValues, [name]: value }));
        }
    }

    const onUpdate = (e) => {
        e.preventDefault();
        if ((song.song_name !== '') && (song.album_name !== '')) {
            setMode('');
            const t = [...list];
            t[parseInt(song.id)] = { ...song };
            setList([...t]);
            history.push({ pathname: '/' });
        }
    };

    const onCancel = () => {
        history.push({ pathname: '/' });
    }

    useEffect(() => {

    }, [song])

    return (
        <form role="form">
            <h1 className="text-center">{title}</h1>
            <div className="container">
                <div className="form-group mb-3">
                    <label className="form-label">ID</label>
                    <input type="text" className="form-control" defaultValue={song.id} readOnly />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Song Name</label>
                    <input type="text" className="form-control" value={song.song_name} onChange={set('song_name')} />
                    <span className="text-danger">{song.song_name === '' ? "Please enter song name" : ""}</span>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Album Name</label>
                    <input type="text" className="form-control" value={song.album_name} onChange={set('album_name')} />
                    <span className="text-danger">{song.album_name === '' ? "Please enter album name" : ""}</span>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Lyric</label>
                    <input type="text" className="form-control" value={song.lyric_text} onChange={set('lyric_text')} />
                </div>
                <div className="col-12">
                    <button className="btn btn-primary mr-4" type="submit" onClick={onUpdate}>{mode === 'EDIT' ? 'Update' : 'Save'}</button><button className="btn btn-danger" type="submit" onClick={onCancel}>Cancel</button>
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