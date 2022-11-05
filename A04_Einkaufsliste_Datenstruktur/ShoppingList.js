var A04_Einkaufsliste_Datenstruktur;
(function (A04_Einkaufsliste_Datenstruktur) {
    /*
       Aufgabe: <A04_Einkaufsliste_Datenstruktur>
       Name: <Alina Jana Hahn>
       Matrikel: <271344>
       Datum: < 5.11.2022  >
       Quellen: < Nathan Haider >
       */
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let addButton = document.querySelector("#add");
        let deleteButton = document.querySelector(".trash");
        let checkButton = document.querySelector(".check");
        let editButton = document.querySelector("#edit");
        addButton.addEventListener("click", addEntry);
        deleteButton.addEventListener("click", deleteEntry);
        checkButton.addEventListener("click", checkEntry);
        editButton.addEventListener("click", editEntry);
        createList();
    }
    function createList() {
    }
    function addEntry() {
        console.log("Eintrag hinzufügen");
        let list = document.querySelector(".list");
        let div = document.createElement("div");
        let label = document.createElement("label");
        let iconTrash = document.createElement("i");
        let iconChecked = document.createElement("input");
        div.addEventListener("click", checkEntry);
        iconTrash.addEventListener("click", deleteEntry);
        div.classList.add("box");
        iconTrash.innerHTML = '<i class="fa-solid fa-trash"> </i>';
        iconTrash.classList.add("trash");
        iconChecked.type = "checkbox";
        iconChecked.classList.add("check");
        let inputValue = document.getElementById("input");
        let amountValue = document.getElementById("amount");
        let commentValue = document.getElementById("comment");
        let dateValue = document.getElementById("date");
        label.innerHTML += inputValue.value + ", " + amountValue.value + ", " + commentValue.value + ", " + dateValue.value;
        label.append(iconChecked, iconTrash);
        div.append(label);
        list.append(div);
    }
    function deleteEntry() {
        console.log("Eintrag wird gelöscht");
        this.parentElement.parentElement.remove();
    }
    function checkEntry() {
        console.log("Eintrag wird abgehakt");
        let date = new Date();
    }
    function editEntry() {
        console.log("Eintrag wird bearbeitet");
    }
})(A04_Einkaufsliste_Datenstruktur || (A04_Einkaufsliste_Datenstruktur = {}));
//# sourceMappingURL=ShoppingList.js.map