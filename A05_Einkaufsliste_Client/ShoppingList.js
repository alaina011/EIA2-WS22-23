var A05_Einkaufsliste_Client;
(function (A05_Einkaufsliste_Client) {
    /*
       Aufgabe: <A05_Einkaufsliste_Client>
       Name: <Alina Jana Hahn>
       Matrikel: <271344>
       Datum: < >
       Quellen: <    , zusammengearbeitet mit Anna Wintermantel  >
       */
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        console.log("handleLoad augerufen");
        let response = await fetch("https://alaina011.github.io/EIA2-WS22-23/A05_Einkaufsliste_Client/Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        let addButton = document.querySelector("#add");
        let editButton = document.querySelector("#edit");
        addButton.addEventListener("click", addEntry);
        editButton.addEventListener("click", editEntry);
        addButton.addEventListener("click", sendOrder);
        dataList(data);
    }
    async function sendOrder(_event) {
        console.log("Eintrag versendet");
        let form = document.querySelector("form");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("https://alaina011.github.io/EIA2-WS22-23/A05_Einkaufsliste_Client/ShoppingList.html?" + query.toString());
        alert("Eintrag gesendet!");
    }
    function dataList(_data) {
        let name;
        let amount;
        let comment;
        let date;
        for (let category in _data) {
            //  console.log(category);
            let items = _data[category];
            // console.log(items[2].name);
            for (let index = 0; index < items.length; index++) {
                name = items[index].name;
                amount = items[index].amount;
                comment = items[index].comment;
                date = items[index].date;
                let createDiv = document.createElement("div");
                createDiv.innerHTML = name + " " + amount + " " + comment + " " + date;
                createDiv.classList.add("dataList");
                document.body.appendChild(createDiv);
            }
        }
    }
    function addEntry(_event) {
        console.log("Eintrag hinzufügen");
        let inputValue = document.getElementById("input");
        let amountValue = document.getElementById("amount");
        let commentValue = document.getElementById("comment");
        let dateValue = document.getElementById("date");
        let i = {
            name: inputValue.value,
            amount: +amountValue.value,
            comment: commentValue.value,
            check: false,
            date: dateValue.value
        };
        addItem(i);
    }
    function addItem(_element) {
        console.log("Eintrag hinzufügen");
        let div = document.createElement("div");
        div.classList.add("box");
        let label = document.createElement("label");
        let date = document.createElement("p");
        let iconTrash = document.createElement("i");
        iconTrash.classList.add("trash");
        iconTrash.innerHTML = '<i class="fa-solid fa-trash"> </i>';
        iconTrash.addEventListener("click", deleteEntry);
        let iconChecked = document.createElement("input");
        iconChecked.classList.add("check");
        iconChecked.type = "checkbox";
        iconChecked.addEventListener("change", checkEntry);
        label.innerHTML += _element.name + ", " + _element.amount + ", " + _element.comment + ", ";
        date.innerHTML += "Zuletzt gekauft am: " + _element.date;
        date.classList.add("dateString");
        div.append(iconChecked, iconTrash, label, date);
        let list = document.querySelector(".list");
        list.append(div);
    }
    function deleteEntry(_event) {
        console.log("Eintrag wird gelöscht");
        this.parentElement.remove();
    }
    function checkEntry(_event) {
        console.log("Eintrag wird abgehakt");
        let dateNow = new Date();
        let day = dateNow.getDate();
        let month = (dateNow.getMonth() + 1);
        let year = dateNow.getFullYear();
        let dateString = `Zuletzt gekauft am: ${day}.${month}.${year}`;
        this.parentElement.querySelector(".dateString").innerHTML = dateString;
    }
    function editEntry(_event) {
        console.log("Eintrag wird bearbeitet");
    }
})(A05_Einkaufsliste_Client || (A05_Einkaufsliste_Client = {}));
//# sourceMappingURL=ShoppingList.js.map