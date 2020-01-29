window.onload = function() {
    new WOW().init();

    let searchbar = document.querySelector('#views-exposed-form-general-search-page-s');
    let nav = document.querySelector('.top-nav');

    if (searchbar !== null) {
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

    let rows = document.querySelectorAll('.line-zig-zag');
    console.log(rows)
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

    let bloc_abonnement = document.querySelector('#block-abonnezvous');
    if (bloc_abonnement != null) {
        let content = document.querySelector('.bottom-space');
        content.appendChild(bloc_abonnement);
        let blocs = document.querySelectorAll('#block-abonnezvous');
        if (blocs.length > 1) {
            for (let i = 1; i < blocs.length; i++) {
                const element = blocs[i];
                element.parentNode.removeChild(element);

            }
        }

    }

    // let allLink = document.querySelectorAll('a');
    // allLink.forEach(aLink => {
    //     if (aLink.innerHTML.isEmpty()) {
    //         aLink.parentElement.removeChild(aLink);
    //     }
    // })

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

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}