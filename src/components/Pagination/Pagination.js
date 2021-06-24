import { useEffect, useState } from 'react';
import { fetchNItems } from './../../utils/Utils.service';

const Pagination = ({ pageItem, setPageItem, pageSize, list, setPageSize }) => {
    const [page, setPage] = useState(1);
    const remainder = list.length % pageSize;
    const noOfPages = (list.length / pageSize) + (remainder ? 1 : 0);
    const pages = [];

    for (let i = 1; i <= noOfPages; i++) {
        pages.push(i);
    }

    useEffect(() => {
        setPageSize(parseInt(pageSize));
        if (page === 1) {
            list.length && setPageItem(fetchNItems(list, page, pageSize));
        } else if (page === pages.length) {
            list.length && setPageItem(fetchNItems(list, (page - 1) * pageSize, ((page - 1) * pageSize) + remainder));
        } else {
            list.length && setPageItem(fetchNItems(list, (page - 1) * pageSize, ((page - 1) * pageSize) + pageSize));
        }
    }, [page])

    return (<div>
        {
            pages.map(p => <a key={p} href='#' style={{ padding: '10px' }} onClick={() => setPage(p)}>{p}</a>)
        }
    </div>);
}

export default Pagination;