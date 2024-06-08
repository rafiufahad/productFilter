const products = {
    data: [
        {
            productName: 'Regular White T-Shirt',
            prce: 77,
            category: 'Topwear',
            image: './pics/wts.jpg'
        },
        {
            productName: 'Beige Short Skirt',
            prce: 202,
            category: 'Topwear',
            image: './pics/bss.jpg'
        },
        {
            productName: 'Sporty SmartWatch',
            prce: 77,
            category: 'Watch',
            image: './pics/ssw.jpg'
        },
        {
            productName: 'Basic Knitted Top',
            prce: 550,
            category: 'Topwear',
            image: './pics/bkt.jpg'
        },
        {
            productName: 'Basic Leather Jacket',
            prce: 345,
            category: 'Jacket',
            image: './pics/blj.jpg'
        },
        {
            productName: 'Stylish Pink Trousers',
            prce: 400,
            category: 'Bottomwear',
            image: './pics/spt.jpg'
        },
        {
            productName: "Brown Men's Jacket",
            prce: 120,
            category: 'Jacket',
            image: "./pics/bmj.jpg"
        },
        {
            productName: 'Comfy Grey Pants',
            prce: 400,
            category: 'Bottomwear',
            image: './pics/cgp.jpg'
        },
    ]
};


for (let i of products.data) {
    const card = document.createElement('div');
    card.classList.add('card', i.category, 'hide');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.setAttribute('src', i.image);

    let container = document.createElement('div');
    container.classList.add('container');

    let name = document.createElement('h5');
    name.classList.add('product-name');
    name.innerText = i.productName.toUpperCase();

    let price = document.createElement('h6');
    price.innerText = `$${i.prce}`;
    container.appendChild(price);
    
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    card.appendChild(container);
    container.appendChild(name);

    document.getElementById('product').appendChild(card);
};

function productFilter(value) {
    const buttons = document.querySelectorAll('.button-value');
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    const element = document.querySelectorAll('.card');
    element.forEach(element => {
        if (value == 'All') {
            element.classList.remove('hide');
        } else {
            if (element.classList.contains(value)){
                element.classList.remove('hide');
            } else {
                element.classList.add('hide');
            }
        }
    })

};


document.getElementById('searchBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    const element = document.querySelectorAll('.product-name');
    const cards = document.querySelectorAll('.card');

    element.forEach((element, i) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[i].classList.remove('hide');
        } else {
            cards[i].classList.add('hide');
        }
    });

});

window.onload = () => {
    productFilter('all');
}