export default class APIService {
    // http://127.0.0.1:5328
    // Insert an article
    // https://next-template-pi-kohl.vercel.app
    static detect(body) {
        return fetch(`http://127.0.0.1:5000/api/detect`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
    static chat(body) {
        return fetch(`http://127.0.0.1:5000/api/chat`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

}