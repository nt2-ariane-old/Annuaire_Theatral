window.onload = function() {
    let rows = document.querySelectorAll('.views-row');
    rows.forEach(row => {
        row.style.backgroundColor = 'red';
        if (row.querySelectorAll('.blog-zig-zag').length > 0) {
            let odd = row.querySelector('space-mobile:odd');
            console.log(odd);
            let even = row.querySelector('space-mobile:even');
            console.log(even);
            odd.forEach(element => {
                element.style.backgroundColor = "red";
            });
            even.forEach(element => {
                element.style.backgroundColor = "green";
            });
        }
    });
}