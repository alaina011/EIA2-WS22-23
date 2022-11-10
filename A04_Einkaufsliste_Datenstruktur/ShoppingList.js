var A04_Einkaufsliste_Datenstruktur;
(function (A04_Einkaufsliste_Datenstruktur) {
    /*
       Aufgabe: <A04_Einkaufsliste_Datenstruktur>
       Name: <Alina Jana Hahn>
       Matrikel: <271344>
       Datum: < 10.11.2022  >
       Quellen: < Nathan Haider, externe Hilfe von einem Kumpel>
       */
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("handleLoad augerufen");
        let addButton = document.querySelector("#add");
        let editButton = document.querySelector("#edit");
        addButton.addEventListener("click", addEntry);
        editButton.addEventListener("click", editEntry);
        dataList(A04_Einkaufsliste_Datenstruktur.data);
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
})(A04_Einkaufsliste_Datenstruktur || (A04_Einkaufsliste_Datenstruktur = {}));
//# sourceMappingURL=ShoppingList.js.map