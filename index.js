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

function label_Symbol() {}
var count = 1;
function getObjectChildren(node, Options = {}) {
  try {
    var { CheckEmpty, FetchClass } = Options;
    var classList = [];
    if (CheckEmpty) {
      if (node.textContent == '') {
        node.parentElement.removeChild(node);
      }
    } else {
      count++;
      if (node.hasChildren) {
        console.log(node.children.map(getObjectChildren));
        classList.push(node.children.map(getObjectChildren));
      } else {
        classList.push(node.className);
      }
      console.log(count);
      return classList;
    }
  } catch (err) {
    console.warn(err.message);
    //ErrorLogTrace('getObjectChildren', err.message);
  }
}

console.log(getObjectChildren(document.getElementById('IMP01-01')), {
  CheckEmpty: false,
  FetchClass: true,
});

let ids = [...document.querySelectorAll('.contrib-group [class]')].map(
  ({ className }) => className
).filter((v, i, a) => a.indexOf(v) == i).filter(Boolean);
console.log(ids);
