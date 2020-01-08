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
}

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

function showHamburgerMenu() {
    console.log('test');
    var nav = document.querySelector('.top-border');
    if (nav.getAttribute('class') !== "responsive") {
        nav.setAttribute('class', 'responsive');
    } else {
        nav.setAttribute('class', 'top-nav')
    }
}