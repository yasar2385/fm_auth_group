// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var curElm = document.getElementById('AF0001');
var contribGroup = document.getElementById('IMP01-01');
//console.log(contribGroup);
var Obj = {
  MetaGroup: curElm.closest('.article-meta'),
  next: curElm.nextElementSibling,
  prev: curElm.previousElementSibling,
  coll: contribGroup.querySelectorAll('.aff'),
  last: [].slice.call(contribGroup.querySelectorAll('.aff')).pop(),
  last_lab: function () {
    console.log(this.last.dataset.label);
    return this.last.dataset.label;
  },
};

console.log(Obj.coll);
console.log(Obj.last_lab());
