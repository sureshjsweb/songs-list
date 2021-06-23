import { useState } from 'react';

const NewForm = ({ row, title, onUpdate }) => {
    const [song, setSong] = useState({
        id: row.id,
        song_name: row.song_name,
        album_name: row.album_name,
        lyric_text: row.lyric_text
    });

    const set = name => {
        return ({ target: { value } }) => {
            setSong((oldValues) => ({ ...oldValues, [name]: value }));
        }
    }

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
                <div class="col-12">
                    <button class="btn btn-primary" type="submit" onClick={(e) => onUpdate(song)}>Update</button><button class="btn btn-secondary" type="submit">Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default NewForm;