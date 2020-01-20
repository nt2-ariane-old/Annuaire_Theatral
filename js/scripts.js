window.onload = function() {
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

    let searchbar = document.querySelector('#search-block-form');
    let nav = document.querySelector('.top-nav');

    if (searchbar !== undefined) {
        searchbar.innerHTML = '';
        searchbar.setAttribute('class', 'searchbar');
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'search_input');
        input.setAttribute('placeholder', 'Rechercher...');

        let button = document.createElement('button');
        button.setAttribute('class', 'search_icon');
        button.setAttribute('type', 'submit');

        let icon = document.createElement('i');
        icon.setAttribute('class', 'fa fa-search');
        button.appendChild(icon);
        searchbar.appendChild(input);
        searchbar.appendChild(button);

        let li = document.createElement('li');
        li.setAttribute('class', 'li-menu-type-2');

        li.appendChild(searchbar);
        nav.appendChild(li);
    }


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
    if (nav.getAttribute('class') !== "responsive") {
        nav.setAttribute('class', 'top-nav responsive');
    } else {
        nav.setAttribute('class', 'top-nav')
    }
}