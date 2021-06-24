
export const computePageItems = (list, value) => {
    return list.filter((it, index) => {
        return index <= value;
    });
}

export const fetchNItems = (list, start, end) => {
    return list.filter((it, index) => {
        return index >= start && index <= end;
    });
}

export const onSearch = (list, searchQuery) => {
    return list.filter((l) => {
        return ((l.song_name.indexOf(searchQuery) > -1) || (l.album_name.indexOf(searchQuery) > -1) || (l.lyric_text.indexOf(searchQuery) > -1));
    });
}

export const CompareSongName = (a, b) => {
    if (a.song_name < b.song_name)
        return -1;
    if (a.song_name > b.song_name)
        return 1;
    return 0;
}

export const CompareAlbumName = (a, b) => {
    if (a.album_name < b.album_name)
        return -1;
    if (a.album_name > b.album_name)
        return 1;
    return 0;
}

export const CompareLyric = (a, b) => {
    if (a.lyric_text < b.lyric_text)
        return -1;
    if (a.lyric_text > b.lyric_text)
        return 1;
    return 0;
}

export const isValidObject = (obj) => {
    console.log(Object.keys(obj));
    return Object.keys(obj).length;
}