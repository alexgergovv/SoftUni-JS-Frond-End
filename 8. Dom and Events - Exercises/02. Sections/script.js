function create(words) {
   let array = [];
   for (let i = 0; i < words.length; i++) {
     let div = document.createElement('div');
     let p = document.createElement('p');
     p.textContent = words[i];
     p.style.display = 'none';
     div.appendChild(p);
     document.getElementById('content').appendChild(div);
     array.push(div);
   }
   array.forEach(el => {
      el.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
      })
   });
}