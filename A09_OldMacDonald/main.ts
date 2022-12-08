namespace A09_OldMacDonald {

    /*
                  Aufgabe: <A09_OldMacDonald>
                  Name: <Alina Jana Hahn>
                  Matrikel: <271344>
                  Datum: <08.12.2022 >
                  Quellen: < externe Hilfe  >
                  */


    window.addEventListener("load", handleLoad);

    let horse: Animals = new Animals("Clara", "Horse", "hay", 50, "wieher", 25);
    let pig: Animals = new Animals("Sophie", "Pig", "corn", 30, "oink", 10);
    let dog: Animals = new Animals("Klaus", "Dog", "meat", 15, "wuff", 5);
    let cow: Animals = new Animals("Hilde", "Cow", "grass", 20, "muuh", 10);
    let cat: Animals = new Animals("Mia", "Cat", "fish", 8, "miiauu", 2);


    let stable: Animals[] = [];

    stable.push(horse);
    stable.push(pig);
    stable.push(dog);
    stable.push(cow);
    stable.push(cat);



    let foodDiv: HTMLElement;
    let animalDiv: HTMLElement;
    let songDiv: HTMLElement;


    function handleLoad(): void {

        foodDiv = <HTMLElement>document.getElementById("food");
        animalDiv = <HTMLElement>document.getElementById("animals");
        songDiv = <HTMLElement>document.getElementById("song");


        foodDiv.innerHTML = horse.amountFood + "kg " + horse.food + ", " + pig.amountFood + "kg " + pig.food + ", " + dog.amountFood + "kg " + dog.food + ", " + cow.amountFood + "kg " + cow.food + ", " + cat.amountFood + "kg " + cat.food;
        songDiv.innerHTML = "Old Mac Donald had a Farm, EIEIO";

        setTimeout(setTime, 1700);

    }



    function setTime(): void {

        for (let i: number = 0; i <= stable.length - 1; i++) {

            let singSong: string = stable[i].sing();

            animalDiv.innerHTML += singSong + "<br>";
            foodDiv.innerHTML = horse.eat() + "kg " + horse.food + ", " + pig.eat() + "kg " + pig.food + ", " + dog.eat() + "kg " + dog.food + ", " + cow.eat() + "kg " + cow.food + ", " + cat.eat() + "kg " + cat.food;


        }
    }

}