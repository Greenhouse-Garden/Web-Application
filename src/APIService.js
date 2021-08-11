export default class APIService {
    static AddProduct(body) {
        return fetch('https://greenhouse-api-django.herokuapp.com/products/create/', {
            'method': 'POST',
            headers: {
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
    }


    static Login(body) {
        return fetch('https://greenhouse-api-django.herokuapp.com/auth/', {
            'method': 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
    }

    static Register(body) {
        return fetch('https://greenhouse-api-django.herokuapp.com/users/signup/', {
            'method': 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
    }

    static Update(id, body){
        return fetch(`https://greenhouse-api-django.herokuapp.com/profile/${id}`, {
            'method': 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
    }
}
