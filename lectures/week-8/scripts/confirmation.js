const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

/*const keys = urlParams.keys();
const values = urlParams.values();
const entries = urlParams.entries();*/

const name = urlParams.get('name')
const birthday = urlParams.get('birthday')
const occupation = urlParams.get('occupation')
const pets = urlParams.get('pets')

document.getElementById('name').innerHTML = name;
document.getElementById('birthday').innerHTML = birthday;
document.getElementById('occupation').innerHTML = occupation;
document.getElementById('pets').innerHTML = pets;

//urlParams.has('product')
/*console.log(keys);
console.log(values);
console.log(entries);*/
/*for (const key of keys) console.log(key);
// product, color, newuser, size

for (const value of values) console.log(value);
// shirt, blue, , m

for(const entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}*/