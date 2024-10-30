export const getCharacter = async (characterId) => {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
};
