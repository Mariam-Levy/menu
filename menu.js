const menu = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: './images/item-01.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        title: 'Diner Double',
        category: 'lunch',
        price: 13.99,
        img: './images/item-02.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
        id: 3,
        title: 'Godzilla Milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-03.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: 'Country Delight',
        category: 'breakfast',
        price: 20.99,
        img: './images/item-04.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
    },
    {
        id: 5,
        title: 'Egg Attack',
        category: 'lunch',
        price: 22.99,
        img: './images/item-05.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    },
    {
        id: 6,
        title: 'Oreo Dream',
        category: 'shakes',
        price: 18.99,
        img: './images/item-06.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: 'Bacon Overflow',
        category: 'breakfast',
        price: 8.99,
        img: './images/item-07.jpeg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
    },
    {
        id: 8,
        title: 'American Classic',
        category: 'lunch',
        price: 12.99,
        img: './images/item-08.jpeg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    },
    {
        id: 9,
        title: 'Quarantine Buddy',
        category: 'shakes',
        price: 16.99,
        img: './images/item-09.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: 'Steak Dinner',
        category: 'dinner',
        price: 39.99,
        img: './images/item-10.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];


const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});



function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {

        return `<article class="menu-item">
        <img class="photo" src=${item.img} alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`;
    })

    // Une todos los elementos del arreglo 'displayMenu' en un solo string
    displayMenu = displayMenu.join('');

    // Actualiza el contenido HTML del elemento 'sectionCenter' con el contenido de 'displayMenu'
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function(values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);

    const categoryBtns = categories.map(function(category) {
        return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`
    }).join('');
    container.innerHTML = categoryBtns;

    const filterBtn = document.querySelectorAll('.filter-btn');

    filterBtn.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            /* console.log(e.currentTarget.dataset.id); */
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                if(menuItem.category === category) {
                    return menuItem;
                }
            });
            /* console.log(menuCategory); */
            if(category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        })
    })
}












