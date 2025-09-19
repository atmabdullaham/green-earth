

function loadCategories() {
fetch("https://openapi.programming-hero.com/api/categories")
.then(res => res.json())
.then(data => displayCategories(data.categories)
    )
}

const loadCardsBasedOnCategory = async(id)=>{
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayAllPlants(data.plants)
    
}

const showDetails = async(id)=>{
  url = `https://openapi.programming-hero.com/api/plant/${id}`
  fetch(url)
  const res = await fetch(url);
  const data = await res.json();
 const details = (data.plants)
const modalBody = document.getElementById("modal-box")
modalBody.innerHTML = "";
modalBody.innerHTML = `
              <h3 class="text-lg font-bold">${details.name}</h3>
              <figure class="pt-4">
                    <img src=${details.image} alt="Plant"
                        class="rounded-xl h-80 object-cover w-full overflow-hidden" />
              </figure>
              <div class="mt-4"><span class="text-lg font-medium">Category: </span>${details.category}</div>
              <div class="mt-2"><span class="text-lg font-medium">Price: </span><i class="fa-solid fa-bangladeshi-taka-sign fa-xs font-extralight"></i>${details.price}</div>
              <p class="py-2">${details.description}</p>
              <div class="modal-action">
                <form method="dialog">
                  <button class="btn">Close</button>
                </form>
              </div>
`
my_modal_5.showModal()

  
}



const displayCategories = (categories) =>{
    // 1. get the container and empty it
    const categoryButtonsContainer = document.getElementById("category-buttons-container");
    categoryButtonsContainer.innerHTML = "";
    // 2. loop through the categories 
    for (let category of categories){
        const btnDiv = document.createElement("div");
        btnDiv.classList.add("my-4")
        btnDiv.innerHTML = `
           <button id="button-${category.id}" onclick="loadCardsBasedOnCategory(${category.id})" class = "btn w-full">${category.category_name}</button>
        `
       categoryButtonsContainer.append(btnDiv);
    }
    console.log(categoryButtonsContainer);
    // 3. create a button for each category
    
    // 4. append the button to the container

    console.log(categories);
}
loadCategories();

const handleActiveButton = (id)=>{
    const buttons = document.getElementsByClassName("btn");
    for (const button of buttons){
        button.classList.remove("active-button");
    }
    const activeButton = document.getElementById(id);
    activeButton.classList.add("active-button");

}

const loadAllTrees = async() =>{
    const url = "https://openapi.programming-hero.com/api/plants"
    const res = await fetch(url);
    const data = await res.json();
    displayAllPlants(data.plants)
}
loadAllTrees()

const displayAllPlants = (plants)=>{
    const cardBox = document.getElementById("card-box")
    cardBox.innerHTML = ""
    for(let plant of plants){
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card" , "bg-base-100", "shadow-sm");
        cardDiv.innerHTML = `
                       <figure class="px-4 pt-4">
                          <img src=${plant.image} alt="Plant"
                            class="rounded-xl h-72 w-full object-cover overflow-hidden" />
                        </figure>
                        <div class="card-body">
                          <h2 onclick="showDetails(${plant.id})" class="card-title text-gray-800 hover:cursor-pointer">${plant.name}</h2>
                          <p class="text-md font-normal text-gray-600">${plant.description}</p>
                          <div class="flex justify-between items-center pt-2">
                            <button class="bg-green-100 px-3 py-1 rounded-full text-green-700 font-medium">${plant.category}</button>
                            <span class="text-sm font-semibold text-gray-800">৳${plant.price}</span>
                          </div>
                          <div class="card-actions pt-3">
                            <button class="btn w-full bg-green-700 rounded-full text-white text-[16px] font-medium">Add to Cart</button>
                          </div>
                        </div>
        `
        cardBox.append(cardDiv)
                        
                     
    }
}