function deleteByEmail() {
   let email = document.getElementsByName('email')[0].value;
    let list = document.querySelectorAll('#customers tr td:nth-child(2)');
   for (const td of list) {
         if(email == td.textContent){
             let row = td.parentNode;
             row.parentNode.removeChild(row);
             document.getElementById('result').textContent = "Deleted.";
             return;
         }
         document.getElementById('result').textContent = "Not found.";
    }
}