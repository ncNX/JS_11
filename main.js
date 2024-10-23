// const root = document.getElementById('root')
const root = document.querySelector("#root");
const action = document.getElementById("action");

const p = document.createElement("p");
const p2 = document.createElement("p");
const ol = document.createElement("ol");
const li = document.createElement("li");
const li2 = document.createElement("li");
const div = document.createElement("div");

const addBtn = document.createElement("button");
const removeBtn = document.createElement("button");

p.innerText = "paragraph";
p2.innerText = "paragraph2";
addBtn.innerText = 'add'
removeBtn.innerText = 'remove'

li.appendChild(p);
li2.appendChild(p2);
ol.appendChild(li);
ol.appendChild(li2);
div.appendChild(ol);
root.appendChild(div);
action.appendChild(addBtn)
action.appendChild(removeBtn)

li.classList.add("listItem");
li2.classList.add("listItem");

action.classList.add('btns')
addBtn.classList.add('btn')
removeBtn.classList.add('btn')


const toggleClass = (option) => {
	if(option === 'add'){
		root.classList.add('pColor')
	} else {
		root.classList.add('pColor')
	}
}

addBtn.addEventListener('click', () => {
	toggleClass('add')
})
removeBtn.addEventListener('click', () => {
	toggleClass()
})


// const remove = () => {
// 	root.classList.remove('pColor')
// }

// removeBtn.addEventListener('click', remove)