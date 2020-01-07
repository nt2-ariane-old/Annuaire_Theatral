window.onload = function() {
    let rows = document.querySelectorAll('.views-row');
    i = 1;
    rows.forEach(row => {
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
                    console.log('j=' + j)
                    j += 1;
                });
            } else {
                row.style.border = '5px solid blue';
                j = 0;
                rowContent.forEach(element => {
                    if (this.isEven(j)) {
                        element.style.float = 'left';
                    } else {
                        element.style.float = 'right';
                    }
                    console.log('j=' + j)
                    j += 1;
                });
            }
            console.log('i=' + i)
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