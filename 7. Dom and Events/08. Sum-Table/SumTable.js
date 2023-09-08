function sumTable() {
    let array = Array.from(document.querySelectorAll('td:nth-child(even)'));
    array.pop();
    let sum = 0;
    array.forEach(el => {
        sum += Number(el.textContent);
    });
    let resultArea = document.getElementById('sum');
    resultArea.textContent = sum; 
}