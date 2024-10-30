import {useRequest} from 'ahooks';
import {getCharacter} from '../../api/getCharacter/getCharacter';

function useCharacter(characterId) {
    const {data: character, loading: isLoading} = useRequest(() => getCharacter(characterId), {
        refreshDeps: [characterId],
        onError: (err) => console.error('Fetch error:', err),
    });

    return {character, isLoading};
}

export default useCharacter;

