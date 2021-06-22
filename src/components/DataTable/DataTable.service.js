
export const computePageItems = (list, value) => {
    return list.filter((it, index) => {
        return index <= value;
    });
}