const host = 'http://localhost:3030/jsonstore';

export const requester = async (method, url, data) => {

    const options = {
        method,
        headers: {}
    }

    if (data !== undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status === 204){
            return response;
        }

        const result = response.json();
        if (response.ok === false){
            throw new Error(result.message)
        }
        return result;

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const del = requester.bind(null, 'DELETE');
