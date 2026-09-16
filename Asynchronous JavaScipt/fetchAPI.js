// fetch("https://fakestoreapi.com/users/fff")
//   .then((response) =>{
//     if(!response.ok){
//         throw new Error("Data is not found")
//     }
//     else{
//         return response.json();
//     }
//     console.log(response.ok)
//      response.json()})
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error fetching data:", error.message));


 async function fetchData(){
    try{let response = await fetch("https://fakestoreapi.com/users" ,{Method : "GET"})
       if(!response.ok){
        throw new Error("Data is Not Found")
       }  
       else{
        let data = await response.json()
        console.log(data[0]);
        
       }  
    }
     catch(error){
        console.log(error.message);
        

    }
  }
  fetchData()