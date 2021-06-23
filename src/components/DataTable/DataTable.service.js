
export const computePageItems = (list, value) => {
    return list.filter((it, index) => {
        return index <= value;
    });
}

export const onSearch = (list, searchQuery) => {
    return list.filter((l) => {
        return ((l.song_name.indexOf(searchQuery) > -1) || (l.album_name.indexOf(searchQuery) > -1) || (l.lyric_text.indexOf(searchQuery) > -1));
    });
}