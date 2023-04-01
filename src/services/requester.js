const requester = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    const serialisedAuth = localStorage.getItem('auth');

    if (serialisedAuth){
        const auth = JSON.parse(serialisedAuth);

        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        }
    }
    
    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        
        if (response.status === 403){
            throw new Error ('Invalid credentials')
        }

        return{};
    }

    return result;
};


export const requestFactory = () => {

    return {
        get: requester.bind(null, 'GET', ),
        post: requester.bind(null, 'POST'),
        put: requester.bind(null, 'PUT'),
        patch: requester.bind(null, 'PATCH'),
        delete: requester.bind(null, 'DELETE'),
    }
};

