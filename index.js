
// document.getElementById("count-el").innerHTML=5;
 
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("pre-entry");
console.log(countEl);
function increment()
{
  count = count+1;
  countEl.textContent = count; 

}
function save(){
   let save = count + "-"; 
   saveEl.textContent +=  save;
   count = 0;
   countEl.textContent = count;
   
  }  
 
