var A01_Zufallsgedicht;
(function (A01_Zufallsgedicht) {
    /*
    Aufgabe: <A01_Zufallsgedicht>
    Name: <Alina Jana Hahn>
    Matrikel: <271344>
    Datum: <Datum der letzten Bearbeitung>
    Quellen: <Henning, Reck>
    */
    let subject = ["Susi", "Harald", "Strolch", "Kim"];
    let predicate = ["malt", "fischt", "grillt", "lernt"];
    let object = ["Blumen", "im Teich", "den Hummer", "kochen"];
    // console.log(subject);
    // console.log(predicate);
    // console.log(object);
    for (let i = subject.length; i > 0; i--) {
        // console.log(i);
        console.log(getVerse(subject, predicate, object));
    }
    function getVerse(_subject, _predicate, _objects) {
        let zufallsZahl;
        let ausgabe = "Voila";
        zufallsZahl = Math.floor(Math.random() * _subject.length);
        let zufallSubject = _subject.splice(zufallsZahl, 1);
        zufallsZahl = Math.floor(Math.random() * _predicate.length);
        let zufallPredicate = _predicate.splice(zufallsZahl, 1);
        zufallsZahl = Math.floor(Math.random() * _objects.length);
        let zufallObject = _objects.splice(zufallsZahl, 1);
        // console.log(zufallsZahl);
        ausgabe = zufallSubject + " " + zufallPredicate + " " + zufallObject;
        return ausgabe;
    }
})(A01_Zufallsgedicht || (A01_Zufallsgedicht = {}));
//# sourceMappingURL=Poem.js.map