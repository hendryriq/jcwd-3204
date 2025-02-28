document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const table = document.querySelector("table tbody");
    let itemList = [];
    let editIndex = null;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const itemName = document.getElementById("itemName").value.trim();
        const itemQuantity = document.getElementById("itemQuantity").value.trim();
        const itemCategory = document.getElementById("itemCategory").value.trim();

        if(itemName && itemQuantity && itemCategory) {
            if(editIndex === null) {
                itemList.push({
                    name: itemName,
                    quantity: itemQuantity,
                    category: itemCategory
                });
            } else {
                itemList[editIndex] = {
                    name: itemName,
                    quantity: itemQuantity,
                    category: itemCategory
                };
                editIndex = null;
            }
            renderTable();
        }

        function renderTable(){
            tableBody.innerHTML = "";
            itemList.forEach((item, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.category}</td>
                    <td class>
                        <button class="edit-btn" onCLick="editItem(${index})" >Edit</button>
                        <button class="delete-btn" onCLick="deleteItem(${index})" >Delete</button>
                    </td>
                `;
                table.appendChild(row);
            });
        }

        window.editItem = function (index){
            const item = itemList[index];
            document.getElementById("itemName").value = item.name;
            document.getElementById("itemQuantity").value = item.quantity;
            document.getElementById("itemCategory").value = item.category;
            editIndex = index;
        }

        window.deleteItem = function (index){
            if(confirm("Are you sure you want to delete this item?")){
                itemList.splice(index, 1);
                renderTable();
            }
        }
    });

});