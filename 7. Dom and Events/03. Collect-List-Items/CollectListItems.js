function extractText() {
    let list = document.querySelectorAll('ul#items li');
    let textArea = document.getElementById('result');
    for (const item of list) {
        textArea.textContent += item.textContent + '\n';
    }
}