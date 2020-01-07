window.onload = function() {
    let rows = document.querySelectorAll('.views-row');
    rows.forEach(row => {
        i = 1;
        rowContent = row.querySelectorAll('.blog-zig-zag');
        if (rowContent.length > 0) {
            if (this.isEven(i)) {
                row.style.border = '5px solid red';
            } else {
                row.style.border = '5px solid blue';

            }
            console.log(i)
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