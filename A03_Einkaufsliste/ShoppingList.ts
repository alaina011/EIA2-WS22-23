namespace A03_Einkaufsliste {

    /*
       Aufgabe: <A03_Einkaufsliste>
       Name: <Alina Jana Hahn>
       Matrikel: <271344>
       Datum: < 27.10.2022   >
       Quellen: <   >
       */
    window.addEventListener("load", createListener);


    function createListener(): void {
        let addButton: Element = document.querySelector("#add");
        let deleteButton: Element = document.querySelector("#trash");
        let checkButton: Element = document.querySelector("#check");


        addButton.addEventListener("click", addEntry);
        deleteButton.addEventListener("click", deleteEntry);
        checkButton.addEventListener("click", checkEntry);

    }

    function addEntry(): void {
        console.log("Eintrag hinzufügen");
    }

    function deleteEntry(): void {
        console.log("Eintrag wird gelöscht");
    }

    function checkEntry(): void {
        console.log("Eintrag wird abgehakt");
    }


}