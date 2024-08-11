function addItem() {
  const ItemInput = document.getElementById("ItemInput");
  const ItemList = document.getElementById("ItemList");

  if (ItemInput.value.trim() === "") {
    alert("Please Enter Your Tasj");
    return;
  }
  const item = generateLi(ItemInput.value.trim());
  ItemList.innerHTML += item;
  ItemInput.value = "";
}

const deleteItem = (event) => {
  console.log("Item Deleted");
  const listItem2 = event.target.parentElement;
  listItem2.remove();
};

const editItem = (event) => {
  console.log("Item Edited");
  const listItem2 = event.target.parentElement;
  const spanText = listItem2.querySelector("span");
  const newItem = prompt("Edit your Task:", spanText.textContent);
  if (newItem !== null && newItem.trim() !== "") {
    spanText.textContent = newItem.trim();
  }
};

const generateLi = (text) => {
  const listItem2 = `
      <li>
        <span>${text}</span>
        <button onClick="deleteItem(event)">Delete</button>
        <button onClick="editItem(event)">Edit</button>
      </li>
    `;
  return listItem2;
};
