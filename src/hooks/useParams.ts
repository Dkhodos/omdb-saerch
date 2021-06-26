import {useState} from "react";
import {SearchProps} from "../services/omdb";
import {debounce} from 'lodash';

export default function useParams() {
    const [params, setParams] = useState<SearchProps>({search: "", page: 1});

    const seDebounceSearch = debounce((query: string) => {
        setParams({
            ...params,
            page: 1,
            search: query,
        })
    }, 500);

    const setSearch = (search: string) => {
        if (!search) {
            setParams({
                ...params,
                page: 1,
                search: "",
            });
            return;
        }

        seDebounceSearch(search);
    }

    return {
        params, setParams, setSearch
    }
}