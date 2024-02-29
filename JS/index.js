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
    console.log(phones)

    
}
loadPhones();