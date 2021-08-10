export default  class APIService{

    static Login(body){
        return fetch('https://greenhouse-api-django.herokuapp.com/auth/', {
            'method': 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(body)
        }).then(response => response.json())
    }
}