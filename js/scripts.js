window.onload = function () {
    new WOW().init();

    let searchbar = document.querySelector('#views-exposed-form-general-search-page-1');
    let nav = document.querySelector('.topnav');

    if (searchbar !== null) {
        searchbar.innerHTML = '';
        searchbar.setAttribute('class', 'searchbar');
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'search_input');
        input.setAttribute('placeholder', 'Rechercher...');
        input.setAttribute('aria-label', 'Rechercher sur le site');
        input.setAttribute('name', 'search_api_fulltext')


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

        let li = document.createElement('div');
        li.setAttribute('class', 'centered dropbtn');
        li.appendChild(searchbar);
        nav.appendChild(li);
        searchbar.style.display = 'inline-block';
    }

    let rows = document.querySelectorAll('.line-zig-zag');

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

    var navButton = document.querySelectorAll('.dropdown button');
    navButton.forEach(element => {
        let menu = navButton.nextSibling;
        menu.addEventListener("mouseout", function (event) {
            menu.hidden = !menu.hidden;
        })
        element.addEventListener('click', function () {
            let expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            menu.hidden = !menu.hidden;
        });
        element.addEventListener("mouseenter", function (event) {
            let expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            menu.hidden = !menu.hidden;
        }, false);
    });


}

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

function showHamburgerMenu() {
    var x = document.getElementById("menu_principal");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

