import axios from 'axios';

export const getDataFromUrl = async (url) => {
    return await axios({
        method: 'get',
        url
    })
        .then((r) => {
            console.log(`Success fetching from ${url}!`);
            return r.data;
        })
        .catch((error) => {
            console.log('error = ', error);
            console.error(`Failed fetching from ${url}!`);
        });
};
