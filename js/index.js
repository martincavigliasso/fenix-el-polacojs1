const API_URL = 'https://jsonplaceholder.typicode.com/'

const htmlResponse = document.querySelector("#app");
const ul =document.createDocumentFragment('ul');

fetch ('${API_URL}/users')
.then ((Response) => Response.json())
.then((users) =>{
    users.forEach(user => {
        let elemento = document.createElement('li')
        elemento.appendChild(document.createTextNode('${user.name}')
        );
        ul.appendChild(elemento);

        
    });
    htmlResponse.appendChild [ul];
   //const tpl = users.map((user => '<li>${user.name}</li>'));
   //htmlResponse.innerHTML = '<ul>${tpl} </ul>'
})


//const xhr = new XMLHttpRequest(); 

//Function: onRequestHandler() 
    //if (this.readyState == 4 && this.statusbar == 200) {
        
      //const data = JSON.parse (this.Response);
      //const htmlResponse = document.querySelector("#app");

      //const tpl = data.map (user =>'<li>${user.name}</li>' );
      //htmlResponse.innerHTML = '<ul>${tpl} </ul>'
         
    //} 



//xhr. addEventListener ("load", onRequestHandler );
//xhr.open('get' ,'${API_URL}/users');
//xhr.send ();