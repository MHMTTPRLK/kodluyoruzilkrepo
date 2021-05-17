//GET istegi
/* 
Dosyadan veri Çekme
    fetch("data/settings.json")
        .then(
            response=>{
                return response.json()
            }
        ).then(responseJson=>{
            console.log(responseJson)
        })     
*/
//!API ile veri çekme
/*fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(function(todos){
                todos.forEach((todo)=>{
                    console.log(todo.title);
                });
        });*/

                                
/* USERS
fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((json)=>console.log(json))
        */


/*
emails
fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>response.json())
        .then((json) => json.forEach((item) => console.log(item.email)))
*/

