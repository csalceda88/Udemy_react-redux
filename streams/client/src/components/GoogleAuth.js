import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '699970160251-364jnbi331m4saq6gtjsc6dpabvqk8mi.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }
    
    render() {
        return <div>GoogleAuth</div>;
    }
}

export default GoogleAuth;