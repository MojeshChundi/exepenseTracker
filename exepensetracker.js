//document.getElementById('btn').addEventListener("click",postDetails);

// let dataTable=document.getElementById('boat');
// dataTable.innerHTML="";
// showOutput=(data)=>{
// dataTable.innerHTML+=`
// <tr>
// <td>${data.userId}</td>
// <td>${data.id}</td>
// <td>${data.title}</td>
// <td>${data.body}</td>
// <td><button id="edit">edit</button></td>
// <td><button id="del">delete</button></td>
// </tr>`
// const del_el=document.getElementById('del');
// del_el.addEventListener("click",()=>{
//   axios
//   .delete(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
//   .then(res=>{
//     console.log("delete",res)
//   })
//   .catch(err=>{
//     console.log(err)
// })

// })
// const edit_el=document.getElementById('edit');
// edit_el.addEventListener("click",()=>{
//   let amount=document.getElementById('cash').value;
//   let  method=document.getElementById('payment').value;
//   let  exepense=document.getElementById('expense').value;
//   let  description=document.getElementById('desc').value;
  
//   let obj={
//       amount,
//       method,
//       exepense,
//       description
//     };
//   axios
//   .put(`https://crudcrud.com/api/1a6a95f96ba34785bfdc47e9f6bb9a69/UserDetails/${data._id}`,obj)
//   .then(res=>{
//     console.log("put",res)
//   })
//   .catch(err=>{
//     console.log(err)
// })

// })
// }

async function abc(){
await document.getElementById('btn').addEventListener("click",()=>{
let amount=document.getElementById('cash').value;
let  method=document.getElementById('payment').value;
let  exepense=document.getElementById('expense').value;
let  description=document.getElementById('desc').value;

let obj={
    amount,
    method,
    exepense,
    description
  };

      axios
      .post('https://crudcrud.com/api/6494d9abfbf6442892bfb30456348183/UserData',obj)
      .then(res=>{
        console.log("post",res)
      })
      .catch(err=>{
        console.log(err)
 })



})
}
abc()



window.addEventListener('DOMContentLoaded',()=>{
  axios.get('https://crudcrud.com/api/6494d9abfbf6442892bfb30456348183/UserData')
  .then((response)=>{
    for(let i=0; i<response.data.length;i++){
     showOutput(response.data[i])
    }
    console.log(response)
  })
  .catch(error=>{
    console.log(error)
  })



  let dataTable=document.getElementById('boat');
dataTable.innerHTML="";
showOutput=(data)=>{
  dataTable.innerHTML+=`
  <tr>
  <td>${data.amount}</td>
  <td>${data.method}</td>
  <td>${data.exepense}</td>
  <td>${data.description}</td>
  <td><button onClick="editfunction(${data.id})">edit</button></td>
  <td><button onClick="deletefunction(${data._id})">delete</button></td>
  </tr>`
  
  }


})

 deletefunction=id=>{

    axios
    .delete('https://crudcrud.com/api/6494d9abfbf6442892bfb30456348183/UserData/'+id)
    .then(res=>{
      console.log("delete",res)
    })
    .catch(err=>{
      console.log(err)
  })
  
}

function editfunction(id){
  axios
  .put('https://crudcrud.com/api/6494d9abfbf6442892bfb30456348183/UserData/'+id,{data:{title:"raj"}}

  )
  .then(res=>{
    console.log("delete",res)
  })
  .catch(err=>{
    console.log(err)
})

}