namespace A04_Einkaufsliste_Datenstruktur {

    /*
       Aufgabe: <A04_Einkaufsliste_Datenstruktur>
       Name: <Alina Jana Hahn>
       Matrikel: <271344>
       Datum: < 5.11.2022  >
       Quellen: < Nathan Haider >
       */
    window.addEventListener("load", handleLoad);

    let object: string;
    let amount: number;
    let date: string;
    let comment: string;
    let nextPurchase: string;
    let amountItems: number = 0;

    function handleLoad(_event: Event): void {
        let addButton: Element = document.querySelector("#add");
        let deleteButton: Element = document.querySelector(".trash");
        let checkButton: Element = document.querySelector(".check");
        let editButton: Element = document.querySelector("#edit");


        addButton.addEventListener("click", addEntry);
        deleteButton.addEventListener("click", deleteEntry);
        checkButton.addEventListener("click", checkEntry);
        editButton.addEventListener("click", editEntry);


        createList();


    }


    function createList(): void {

    }





    function addEntry(_event: Event): void {
        console.log("Eintrag hinzufügen");

        let list: HTMLElement = document.querySelector<HTMLElement>(".list");
        let div: HTMLElement = document.createElement("div");
        let label: HTMLElement = document.createElement("label");
        let iconTrash: HTMLElement = document.createElement("i");
        let iconChecked: HTMLInputElement = document.createElement("input");

        let inputValue: HTMLInputElement = <HTMLInputElement>document.getElementById("input");
        let amountValue: HTMLInputElement = <HTMLInputElement>document.getElementById("amount");
        let commentValue: HTMLInputElement = <HTMLInputElement>document.getElementById("comment");
        let dateValue: HTMLInputElement = <HTMLInputElement>document.getElementById("date");


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



    function deleteEntry(_event: Event): void {
        console.log("Eintrag wird gelöscht");
        this.parentElement.parentElement.remove();
    }

    function checkEntry(_event: Event): void {
        console.log("Eintrag wird abgehakt");

        let dateNow: Date = new Date();
        let day: number = dateNow.getDate();
        let month: number = dateNow.getMonth();
        let year: number = dateNow.getFullYear();

        this.parentElement.innerHTML += day + month + year;

    }


    function editEntry(_event: Event): void {
        console.log("Eintrag wird bearbeitet");
    }




}