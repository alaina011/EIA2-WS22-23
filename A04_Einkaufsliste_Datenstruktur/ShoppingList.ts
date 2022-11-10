namespace A04_Einkaufsliste_Datenstruktur {

    /*
       Aufgabe: <A04_Einkaufsliste_Datenstruktur>
       Name: <Alina Jana Hahn>
       Matrikel: <271344>
       Datum: < 5.11.2022  >
       Quellen: < Nathan Haider >
       */
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        console.log("handleLoad augerufen");
        let addButton: Element = document.querySelector("#add");
        let editButton: Element = document.querySelector("#edit");


        addButton.addEventListener("click", addEntry);
        editButton.addEventListener("click", editEntry);

        dataList(data);

    }

    function dataList(_data: Data): void {

        let name: string;
        let amount: number;
        let comment: string;
        let date: string;


        for (let category in _data) {
            //  console.log(category);

            let items: Item[] = _data[category];
            // console.log(items[2].name);

            for (let index: number = 0; index < items.length; index++) {

                name = items[index].name;
                amount = items[index].amount;
                comment = items[index].comment;
                date = items[index].date;


                let createDiv: HTMLElement = document.createElement("div");

                createDiv.innerHTML = name + " " + amount + " " + comment + " " + date;
                createDiv.classList.add("dataList");
                document.body.appendChild(createDiv);


            }

           



        }

    }



    function addEntry(_event: Event): void {
        console.log("Eintrag hinzufügen");


        let inputValue: HTMLInputElement = <HTMLInputElement>document.getElementById("input");
        let amountValue: HTMLInputElement = <HTMLInputElement>document.getElementById("amount");
        let commentValue: HTMLInputElement = <HTMLInputElement>document.getElementById("comment");
        let dateValue: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
        let i: Item = {
            name: inputValue.value,
            amount: +amountValue.value,
            comment: commentValue.value,
            check: false,
            date: dateValue.value
        };
        addItem(i);
    }



    function addItem(_element: Item): void {
        console.log("Eintrag hinzufügen");

        let div: HTMLElement = document.createElement("div");
        div.classList.add("box");
        let label: HTMLElement = document.createElement("label");
        let date: HTMLElement = document.createElement("p");

        let iconTrash: HTMLElement = document.createElement("i");
        iconTrash.classList.add("trash");
        iconTrash.innerHTML = '<i class="fa-solid fa-trash"> </i>';
        iconTrash.addEventListener("click", deleteEntry);

        let iconChecked: HTMLInputElement = document.createElement("input");
        iconChecked.classList.add("check");
        iconChecked.type = "checkbox";
        iconChecked.addEventListener("change", checkEntry);

        label.innerHTML += _element.name + ", " + _element.amount + ", " + _element.comment + ", ";
        date.innerHTML += "Zuletzt gekauft am: " + _element.date;
        date.classList.add("dateString");
        div.append(iconChecked, iconTrash, label, date);

        let list: HTMLElement = document.querySelector<HTMLElement>(".list");
        list.append(div);
    }


    function deleteEntry(_event: Event): void {
        console.log("Eintrag wird gelöscht");
        this.parentElement.remove();
    }

    function checkEntry(_event: Event): void {
        console.log("Eintrag wird abgehakt");

        let dateNow: Date = new Date();
        let day: number = dateNow.getDate();
        let month: number = (dateNow.getMonth() + 1);
        let year: number = dateNow.getFullYear();

        let dateString: string = `Zuletzt gekauft am: ${day}.${month}.${year}`;
        this.parentElement.querySelector(".dateString").innerHTML = dateString;

    }


    function editEntry(_event: Event): void {
        console.log("Eintrag wird bearbeitet");
    }




}