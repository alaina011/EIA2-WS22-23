namespace A01_RandomPoem {

/*
Aufgabe: <A01_Zufallsgedicht>
Name: <Alina Jana Hahn>
Matrikel: <271344>
Datum: <13.10.2022>
Quellen: <Henning, Reck>
*/



let subject: string [] = ["Susi", "Harald", "Strolch", "Kim", "Sarah", "Linda"];

let predicate: string [] = ["malt", "fischt", "grillt", "lernt", "radelt", "putzt" ];

let object: string [] = ["Blumen", "im Teich", "den Hummer", "in der Küche", "mit dem Fahrrad", "die Dusche"];

// console.log(subject);
// console.log(predicate);
// console.log(object);

debugger;

for (let i: number = subject.length; i > 0; i-- ) {
    // console.log(i);

console.log(getVerse(subject, predicate, object)); 

}






function getVerse (_subject: string[], _predicate: string[], _objects: string[]): string {

    let randomNumber: number;
    let output: string = "Voila"; 


    randomNumber = Math.floor(Math.random() * _subject.length); 
    let randomSubject: string[] = _subject.splice(randomNumber, 1) ;
    

    randomNumber = Math.floor(Math.random() * _predicate.length);
    let randomPredicate: string[] = _predicate.splice(randomNumber, 1) ;


    randomNumber = Math.floor(Math.random() * _objects.length);
    let randomObject: string[] = _objects.splice(randomNumber, 1) ; 

    // console.log(randomNumber);

    output = randomSubject + " " + randomPredicate + " " + randomObject; 
    return output ;

}

   


}