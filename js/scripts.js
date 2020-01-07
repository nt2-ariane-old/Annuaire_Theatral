window.onload = function() {
    let rows = document.querySelectorAll('.views-row');
    rows.forEach(row => {
        i = 1;
        row.style.backgroundColor = 'red';
        rowContent = row.querySelectorAll('.blog-zig-zag');
        if (rowContent.length > 0) {
            if (i % 2 == 0) {
                row.style.border = '5px solid red';
            } else {
                row.style.border = '5px solid blue';

            }
            i++;

        }
    });
}