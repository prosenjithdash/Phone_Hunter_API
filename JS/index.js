// JavaScript File

// Load All Phone Data






// Load Data Way number : 01

// const loadPhoneDatas = () => {
//     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//         .then(res => res.json())
//         .then(data => displayPhoneData(data))
// } 

// const displayPhoneData = (phones) => {
//     console.log(phones)
// }

// loadPhoneDatas();







// Load Data Way Number : 02 with async

const loadPhones = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')

    const data = await res.json()
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones)

    
}




// Display Data

const displayPhones = (phones) => {

    // console.log(phones)

    // single show phone




    // for (const phone of phones) {
    //     console.log(phone)
    // }






    // 1. get ui div with id 
    const phonesDivContainer = document.getElementById('phone_container');


    // single show phone with forEach

    phones.forEach(phones => {
        console.log(phones)

        //2. create div

        const phonescard = document.createElement('div');
        phonescard.classList=`card w-96 bg-base-100 shadow-xl`

        //3. set innerHTML

        phonescard.innerHTML = `
            <figure><img src=${phones.image} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title justify-center">${phones.phone_name}</h2> 
                        <p class='text-center'>${phones.slug}</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">Show Details</button>
                        </div>
                    </div>
        `

        //4. set appendChild
        
        phonesDivContainer.appendChild(phonescard);

    })
 
   
}

loadPhones();