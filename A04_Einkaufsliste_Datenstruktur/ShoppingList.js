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
    let object;
    let amount;
    let date;
    let comment;
    let nextPurchase;
    let amountItems = 0;
    function handleLoad(_event) {
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
    function addEntry(_event) {
        console.log("Eintrag hinzufügen");
        let list = document.querySelector(".list");
        let div = document.createElement("div");
        let label = document.createElement("label");
        let iconTrash = document.createElement("i");
        let iconChecked = document.createElement("input");
        let inputValue = document.getElementById("input");
        let amountValue = document.getElementById("amount");
        let commentValue = document.getElementById("comment");
        let dateValue = document.getElementById("date");
        div.addEventListener("click", checkEntry);
        iconTrash.addEventListener("click", deleteEntry);
        div.classList.add("box");
        iconTrash.classList.add("trash");
        iconChecked.classList.add("check");
        iconTrash.innerHTML = '<i class="fa-solid fa-trash"> </i>';
        iconChecked.type = "checkbox";
        label.innerHTML += inputValue.value + ", " + amountValue.value + ", " + commentValue.value + ", " + dateValue.value;
        label.append(iconChecked, iconTrash);
        div.append(label);
        list.append(div);
    }
    function deleteEntry(_event) {
        console.log("Eintrag wird gelöscht");
        this.parentElement.parentElement.remove();
    }
    function checkEntry(_event) {
        console.log("Eintrag wird abgehakt");
        let dateNow = new Date();
        let day = dateNow.getDate();
        let month = dateNow.getMonth();
        let year = dateNow.getFullYear();
        this.parentElement.innerHTML += day + month + year;
    }
    function editEntry(_event) {
        console.log("Eintrag wird bearbeitet");
    }
})(A04_Einkaufsliste_Datenstruktur || (A04_Einkaufsliste_Datenstruktur = {}));
//# sourceMappingURL=ShoppingList.js.map