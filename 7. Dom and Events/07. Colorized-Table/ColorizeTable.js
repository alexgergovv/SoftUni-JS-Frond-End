function colorize() {
    let list = Array.from(document.querySelectorAll('table tr:nth-child(even)'));
    list.forEach((item) => {
        item.style.background = "teal";
    })
}