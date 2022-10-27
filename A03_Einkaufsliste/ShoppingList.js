var A03_Einkaufsliste;
(function (A03_Einkaufsliste) {
    /*
       Aufgabe: <A03_Einkaufsliste>
       Name: <Alina Jana Hahn>
       Matrikel: <271344>
       Datum: < 27.10.2022   >
       Quellen: <   >
       */
    window.addEventListener("load", createListener);
    function createListener() {
        let addButton = document.querySelector("#add");
        let deleteButton = document.querySelector("#trash");
        let checkButton = document.querySelector("#check");
        addButton.addEventListener("click", addEntry);
        deleteButton.addEventListener("click", deleteEntry);
        checkButton.addEventListener("click", checkEntry);
    }
    function addEntry() {
        console.log("Eintrag hinzufügen");
    }
    function deleteEntry() {
        console.log("Eintrag wird gelöscht");
    }
    function checkEntry() {
        console.log("Eintrag wird abgehakt");
    }
})(A03_Einkaufsliste || (A03_Einkaufsliste = {}));
//# sourceMappingURL=ShoppingList.js.map