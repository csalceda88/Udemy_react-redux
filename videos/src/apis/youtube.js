import axios from 'axios';

const KEY = 'AIzaSyBQCKdrjoP9S5PYm8I0U9tj2xbf_BHPfRs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});