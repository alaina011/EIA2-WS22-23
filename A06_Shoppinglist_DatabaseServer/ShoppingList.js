var A06_Einkaufsliste_DatabaseServer;
(function (A06_Einkaufsliste_DatabaseServer) {
    /*
       Aufgabe: <A06_Einkaufsliste_DatabaseServer>
       Name: <Alina Jana Hahn>
       Matrikel: <271344>
       Datum: <19.11.2022 >
       Quellen: < Lisa Blindenhöfer, zusammengearbeitet mit Anna Wintermantel>
       */
    window.addEventListener("load", handleLoad);
    let json = {};
    async function handleLoad(_event) {
        console.log("handleLoad augerufen");
        let response = await fetch("https://webuser.hs-furtwangen.de/~hahnalin/Server_Shoppinglist/index.php/?command=find&collection=Data");
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
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Orders");
        query.set("data", JSON.stringify(json));
        let response = await fetch("https://webuser.hs-furtwangen.de/~hahnalin/Server_Shoppinglist/index.php?" + query.toString());
        console.log(response);
        alert("wurde versendet");
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
    async function deleteEntry(_event) {
        console.log("Eintrag wird gelöscht");
        this.parentElement.remove();
        let query = new URLSearchParams();
        query.set("commend", "delete");
        query.set("collection", "Orders");
        query.set("data", JSON.stringify(json));
        let response = await fetch("https://webuser.hs-furtwangen.de/~hahnalin/Server_Shoppinglist/index.php?" + query.toString());
        console.log(response);
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
})(A06_Einkaufsliste_DatabaseServer || (A06_Einkaufsliste_DatabaseServer = {}));
//# sourceMappingURL=ShoppingList.js.map