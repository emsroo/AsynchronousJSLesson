console.log("soy un script externo")


// const data ={"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}} ;
// const data ={};
const data=null; 

function getData(){
    return new Promise((resolve,reject)=>{
            if(data==null){
                reject(new Error("Data is empty"));
            } // == null
        // regresar Data in 2 secs, simula accion sincrona
        setTimeout( ()=> {resolve(data);} , 2*1000)
    }
    ); 
    
    // return data;  recover instantaneously
}; //getData

//call to the method
getData()
.then((response)=> console.log("respuesta: ", response))
.catch((err)=> console.error("catch: ", err));