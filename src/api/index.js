export async function getSongsList(){
    const response = await fetch('./songs_list.json');
    const list = await response.json();
    return list;
}