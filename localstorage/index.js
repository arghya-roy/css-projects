localStorage.setItem('Name', "Arghya")
localStorage.setItem('Name2', "Arghya2")

let product = {
    name: 'Pant',
    price: 656,
    rating: {
        stars: 4.5,
        noOfViews: 58,
    },
};

localStorage.setItem('product', JSON.stringify(product));
product2=JSON.parse(localStorage.getItem('product'))

console.log(product2)

// localStorage.removeItem('Name2')

localStorage.clear();

