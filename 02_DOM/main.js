
document.write("<p>Write content</p>")

const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('create-btn');
const deleteBtn = document.getElementById('delete-btn');
const themeBtn = document.getElementById('theme-btn');
const navbar = document.getElementById('navbar');
themeBtn.onclick = ()=>
{
    //console.log("My button clicked!!!");
    if(themeBtn.innerHTML == "Dark Header")
    {
        themeBtn.innerHTML ="Light Header";
         //remove light classes
         //navbar.classList.remove('bg-dark');
          navbar.classList.remove('navbar-light');
          navbar.classList.remove('bg-light');
         //add dark classes
         //navbar.classList.add('bg-primary');        
         navbar.classList.add('navbar-dark');        
         navbar.classList.add('bg-primary');   
         
         navbar.classList.add('text-dark');
    }
    else
    {
        themeBtn.innerHTML = "Dark Header";    
        //delete dark classes
        //navbar.classList.remove('bg-primary');
        //add light classes
        //navbar.classList.add('bg-dark');
        navbar.classList.remove('navbar-dark');        
        navbar.classList.remove('bg-primary'); 

        navbar.classList.add('navbar-light');
        navbar.classList.add('bg-light');
          
           
    }
  
}


tableBody.innerHTML = "";
let products = [];

createBtn.onclick = () =>{
    //console.log("Clicked from JS");
    const newProduct = getProductFromForm();
    products.push(newProduct);
    // add content
    addProductToTable(newProduct);
}
deleteBtn.onclick = ()=>{
    products = [];
    tableBody.innerHTML = "";
}

function getProductFromForm()
{
    const modelInput = document.getElementById('modelInput');
    const descInput = document.getElementById('descriptionInput');
    const priceInput = document.getElementById('inputPrice');
    return {
        id:products.length+1,
        model:modelInput.value,
        description:descInput.value,
        price:+priceInput.value
    }
}

function addProductToTable(product)
{
    tableBody.innerHTML += `<tr class="table-secondary">
                            <th scope="row">${product.id}</th>
                            <td>${product.model}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            </tr>`; 
}