window.onload = function() {
    let searchbar = document.querySelector('#search-block-form');
    let nav = document.querySelector('.top-nav');

    if (searchbar !== undefined) {
        searchbar.innerHTML = '';
        searchbar.setAttribute('class', 'searchbar');
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'search_input');
        input.setAttribute('placeholder', 'Rechercher...');
        input.setAttribute('aria-label', 'Rechercher sur le site');


        let button = document.createElement('button');
        button.setAttribute('class', 'search_icon');
        button.setAttribute('type', 'submit');
        button.setAttribute('id', 'search-button');
        button.setAttribute('aria-label', 'Bouton Rechercher');



        let icon = document.createElement('i');
        icon.setAttribute('class', 'fa fa-search');
        button.appendChild(icon);
        searchbar.appendChild(input);
        searchbar.appendChild(button);

        let li = document.createElement('li');
        li.setAttribute('class', 'li-menu-type-2 no-bottom-margin');

        li.appendChild(searchbar);
        nav.appendChild(li);
        searchbar.style.display = 'inline-block';
    }

    let cart = document.querySelector('.cart-block--summary__icon');
    cart.innerHTML = '';
    cart.style.display = 'inline';

    let cart_icon = document.createElement('i');
    cart_icon.setAttribute('class', 'fas fa-shopping-cart');
    cart.appendChild(cart_icon);


    let rows = document.querySelectorAll('.views-row');
    i = 0;
    rows.forEach(row => {
        rowContent = row.querySelectorAll('.blog-zig-zag');
        if (rowContent.length > 0) {
            if (this.isEven(i)) {
                j = 0;
                rowContent.forEach(element => {
                    if (this.isEven(j)) {
                        element.style.float = 'left';
                    } else {
                        element.style.float = 'right';
                    }
                    j += 1;
                });
            } else {
                j = 0;
                rowContent.forEach(element => {
                    if (this.isEven(j)) {
                        element.style.float = 'right';
                    } else {
                        element.style.float = 'left';
                    }
                    j += 1;
                });
            }
            i += 1;

        }
    });

    // let bloc_abonnement = document.querySelector('#abonnement');
    // if (bloc_abonnement == undefined) {
    //     let content = document.querySelector('.bottom-space');
    //     if (content == undefined) {
    //         content.innerHTML = bloc_abonnement;
    //     }
    // }

}

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

function showHamburgerMenu() {
    console.log('test');
    var nav = document.querySelector('.top-nav');
    if (nav.getAttribute('class') !== "top-nav responsive") {
        nav.setAttribute('class', 'top-nav responsive');
    } else {
        nav.setAttribute('class', 'top-nav')
    }
}