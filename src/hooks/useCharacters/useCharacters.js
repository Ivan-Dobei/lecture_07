import {useRequest} from 'ahooks';
import {getCharacters} from '../../api/getCharacters/getCharacters';
import {useState} from 'react';

function useCharacters(initialUrl) {
    const [url, setUrl] = useState(initialUrl || 'https://rickandmortyapi.com/api/character');

    const {data, loading: isLoading} = useRequest(() => getCharacters(url), {
        refreshDeps: [url],
        onError: (err) => console.error('Fetch error:', err),
    });

    const characters = data?.results || [];
    const info = data?.info || {};

    return {characters, info, isLoading, setUrl};
}

export default useCharacters;
