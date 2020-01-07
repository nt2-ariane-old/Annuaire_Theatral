window.onload = function() {
    let rows = document.querySelectorAll('.views-row');
    rows.forEach(row => {
        if (!empty(row.querySelectorAll('.blog-zig-zag'))) {
            let odd = row.querySelector('space-mobile:odd');
            odd.forEach(element => {
                odd.style.backgroundColor = "red";
            });
        }
    });
}