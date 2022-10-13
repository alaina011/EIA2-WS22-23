var A01_RandomPoem;
(function (A01_RandomPoem) {
    /*
    Aufgabe: <A01_Zufallsgedicht>
    Name: <Alina Jana Hahn>
    Matrikel: <271344>
    Datum: <13.10.2022>
    Quellen: <Henning, Reck>
    */
    let subject = ["Susi", "Harald", "Strolch", "Kim", "Sarah", "Linda"];
    let predicate = ["malt", "fischt", "grillt", "lernt", "radelt", "putzt"];
    let object = ["Blumen", "im Teich", "den Hummer", "in der Küche", "mit dem Fahrrad", "die Dusche"];
    // console.log(subject);
    // console.log(predicate);
    // console.log(object);
    debugger;
    for (let i = subject.length; i > 0; i--) {
        // console.log(i);
        console.log(getVerse(subject, predicate, object));
    }
    function getVerse(_subject, _predicate, _objects) {
        let randomNumber;
        let output = "Voila";
        randomNumber = Math.floor(Math.random() * _subject.length);
        let randomSubject = _subject.splice(randomNumber, 1);
        randomNumber = Math.floor(Math.random() * _predicate.length);
        let randomPredicate = _predicate.splice(randomNumber, 1);
        randomNumber = Math.floor(Math.random() * _objects.length);
        let randomObject = _objects.splice(randomNumber, 1);
        // console.log(randomNumber);
        output = randomSubject + " " + randomPredicate + " " + randomObject;
        return output;
    }
})(A01_RandomPoem || (A01_RandomPoem = {}));
//# sourceMappingURL=Poem.js.map