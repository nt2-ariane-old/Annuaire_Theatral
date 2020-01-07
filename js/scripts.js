window.onload = function() {
    let rows = document.querySelectorAll('.views-row');
    rows.forEach(row => {
        i = 1;
        rowContent = row.querySelectorAll('.blog-zig-zag');
        if (rowContent.length > 0) {
            if (this.isEven(i)) {
                row.style.border = '5px solid red';
                j = 0;
                rowContent.forEach(element => {
                    if (this.isEven(j)) {
                        element.style.float = 'left';
                    } else {
                        element.style.float = 'right';
                    }
                    j++;
                });
            } else {
                row.style.border = '5px solid blue';
                if (this.isEven(j)) {
                    element.style.float = 'right'
                    ß;
                } else {
                    element.style.float = 'left';
                }

            }
            i++;

        }
    });
}

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}