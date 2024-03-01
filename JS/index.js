// JavaScript File

// // Load All Phone Data


// // Load Data Way number : 01

// // const loadPhoneDatas = () => {
// //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// //         .then(res => res.json())
// //         .then(data => displayPhoneData(data))
// // } 

// // const displayPhoneData = (phones) => {
// //     console.log(phones)
// // }

// // loadPhoneDatas();







// // Load Data Way Number : 02 with async

// const loadPhones = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')

//     const data = await res.json()
//     const phones = data.data;
//     // console.log(phones)
//     displayPhones(phones)

    
// }




// // Display Data

// const displayPhones = (phones) => {

//     // console.log(phones)

//     // single show phone




//     // for (const phone of phones) {
//     //     console.log(phone)
//     // }




// // 34-2 Display Phones Dynamically On Each Card


//     // 1. get ui div with id 
//     const phonesDivContainer = document.getElementById('phone_container');


//     // single show phone with forEach

//     phones.forEach(phones => {
//         // console.log(phones)

//         //2. create div

//         const phonescard = document.createElement('div');
//         phonescard.classList=`card w-96 bg-base-100 shadow-xl`

//         //3. set innerHTML

//         phonescard.innerHTML = `
//             <figure><img src=${phones.image} alt="Shoes" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title justify-center">${phones.phone_name}</h2> 
//                         <p class='text-center'>${phones.slug}</p>
//                         <div class="card-actions justify-center">
//                             <button class="btn btn-primary">Show Details</button>
//                         </div>
//                     </div>
//         `

//         //4. set appendChild
        
//         phonesDivContainer.appendChild(phonescard);

//     })
 
   
// }

// loadPhones();












//  *********** Practice part **********

// Load All Phones Data with async

const loadPhones = async (searchText , isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones , isShowAll);
    
}


// Display Phones Data with display Function

const displayPhones = (phones , isShowAll) => {
    console.log(phones);


    // show single data with forEach cause hare not take return

    //1. get where we want stay data
    const phonesContainer = document.getElementById('phones_container')

    // Clear phone container cards before adding new cards
    phonesContainer.textContent = '';


    //34-4 Show Conditional Show All Button

    const showAllContainer = document.getElementById('show_all_container');

    // use condition for show button
    if (phones.length > 9 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    }
    else {
            showAllContainer.classList.add('hidden');

    }

    console.log('Is show all ', isShowAll)
    
    // show only first 9 data if not isShowall
    if (!isShowAll) {
        phones = phones.slice(0, 9);
   }


    phones.forEach(phone => {
        console.log(phone)

        // 2. create div
        const phonesCard = document.createElement('div');
        phonesCard.classList = `card w-96 bg-base-100  border-2 border-gray-200 my-[20px]`;

        // 3. set innerHTML
        phonesCard.innerHTML =
            
            `
            <figure class="px-10 pt-10">
                        <img src=${phone.image} alt="Shoes"
                            class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">${phone.phone_name} </h2>
                        <p>${phone.slug}</p>
                        <div class="card-actions">
                            <button class="btn btn-primary mt-4">Show Details</button>
                        </div>
                    </div>

        `

        // 4. appendChild

        phonesContainer.appendChild(phonesCard)

    });

    //  34-5 Show And Hide Loading Spinner While Loading API Data 

    // Hide loading spinner
    toggleLoadingSpinner(false)
    
}


//34-3 Implement Search Functionality And Display Search Result

const handleSearch = (isShowAll) => {
    // console.log('Search btn')

    // call loading spinner
    toggleLoadingSpinner(true);

    // get searchFlied with getElementById
    const searchFlied = document.getElementById('search_flied');

    // get searchFlied value
    const searchText = searchFlied.value;
    // console.log(searchText);

    // call loadPhones with searchText value
    loadPhones(searchText , isShowAll);
}

//  34-5 Show And Hide Loading Spinner While Loading API Data 
    
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading_spinner')
        if (isLoading) {
            loadingSpinner.classList.remove('hidden')
        }
        else {
            loadingSpinner.classList.add('hidden')

    }
    
}
    
//34-6 (Optional) Implement Show All Button To Display All Data

const handleShowAll = () => {
    console.log('Show all')
    handleSearch(true);
}


// loadPhones();