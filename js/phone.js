// API
const loadPhone = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    // console.log(data);
    displayPhones(data);
}

// const displayPhones = phones => {
//     // console.log(phones);
//     phones.forEach(phone => {
//         console.log(phone);
//     });
// }

const displayPhones = phones => {
    phones.forEach(phone => {
        console.log(phone);
    });
}

loadPhone();

// trying to find the error