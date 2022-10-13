namespace A01_Zufallsgedicht {

/*
Aufgabe: <A01_Zufallsgedicht>
Name: <Alina Jana Hahn>
Matrikel: <271344>
Datum: <13.10.2022>
Quellen: <Henning, Reck>
*/



let subject: string [] = ["Susi", "Harald", "Strolch", "Kim"];

let predicate: string [] = ["malt", "fischt", "grillt", "lernt"];

let object: string [] = ["Blumen", "im Teich", "den Hummer", "kochen"];

// console.log(subject);
// console.log(predicate);
// console.log(object);



for (let i: number = subject.length; i > 0; i-- ) {
    // console.log(i);

console.log(getVerse(subject, predicate, object)); 

}






function getVerse (_subject: string[], _predicate: string[], _objects: string[]): string {

    let zufallsZahl: number;
    let ausgabe: string = "Voila"; 


    zufallsZahl = Math.floor(Math.random() * _subject.length); 
    let zufallSubject: string[] = _subject.splice(zufallsZahl, 1) ;
    

    zufallsZahl = Math.floor(Math.random() * _predicate.length);
    let zufallPredicate: string[] = _predicate.splice(zufallsZahl, 1) ;


    zufallsZahl = Math.floor(Math.random() * _objects.length);
    let zufallObject: string[] = _objects.splice(zufallsZahl, 1) ; 

    // console.log(zufallsZahl);

    ausgabe = zufallSubject + " " + zufallPredicate + " " + zufallObject; 
    return ausgabe ;

}

   


}