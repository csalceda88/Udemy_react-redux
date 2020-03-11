import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _lqJrmreW0iq4JwlWF5VAaX-mDG1q8cAfQISaWW9m6c'
    }
});