export default  class APIService{
    static AddProduct(body){
        return fetch('https://greenhouse-api-django.herokuapp.com/products/create/',{
            'method':'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body:JSON.stringify(body)
        }).then(response=>response.json())
    }
}
