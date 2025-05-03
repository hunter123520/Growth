export default class APIService {
    // http://127.0.0.1:5000
    // Insert an article
    //https://growth-wine.vercel.app/
    //https://next-template-pi-kohl.vercel.app/api/
    static detect(body) {
        return fetch(`https://growth-wine.vercel.app/api/detect`, {
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
        return fetch(`https://growth-wine.vercel.app/api/chat`, {
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