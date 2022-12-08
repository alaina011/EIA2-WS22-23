var A09_OldMacDonald;
(function (A09_OldMacDonald) {
    /*
                  Aufgabe: <A09_OldMacDonald>
                  Name: <Alina Jana Hahn>
                  Matrikel: <271344>
                  Datum: <08.12.2022 >
                  Quellen: < externe Hilfe  >
                  */
    window.addEventListener("load", handleLoad);
    let horse = new A09_OldMacDonald.Animals("Clara", "Horse", "hay", 50, "wieher", 25);
    let pig = new A09_OldMacDonald.Animals("Sophie", "Pig", "corn", 30, "oink", 10);
    let dog = new A09_OldMacDonald.Animals("Klaus", "Dog", "meat", 15, "wuff", 5);
    let cow = new A09_OldMacDonald.Animals("Hilde", "Cow", "grass", 20, "muuh", 10);
    let cat = new A09_OldMacDonald.Animals("Mia", "Cat", "fish", 8, "miiauu", 2);
    let stable = [];
    stable.push(horse);
    stable.push(pig);
    stable.push(dog);
    stable.push(cow);
    stable.push(cat);
    let foodDiv;
    let animalDiv;
    let songDiv;
    function handleLoad() {
        foodDiv = document.getElementById("food");
        animalDiv = document.getElementById("animals");
        songDiv = document.getElementById("song");
        foodDiv.innerHTML = horse.amountFood + "kg " + horse.food + ", " + pig.amountFood + "kg " + pig.food + ", " + dog.amountFood + "kg " + dog.food + ", " + cow.amountFood + "kg " + cow.food + ", " + cat.amountFood + "kg " + cat.food;
        songDiv.innerHTML = "Old Mac Donald had a Farm, EIEIO";
        setTimeout(setTime, 1700);
    }
    function setTime() {
        for (let i = 0; i <= stable.length - 1; i++) {
            let singSong = stable[i].sing();
            animalDiv.innerHTML += singSong + "<br>";
            foodDiv.innerHTML = horse.eat() + "kg " + horse.food + ", " + pig.eat() + "kg " + pig.food + ", " + dog.eat() + "kg " + dog.food + ", " + cow.eat() + "kg " + cow.food + ", " + cat.eat() + "kg " + cat.food;
        }
    }
})(A09_OldMacDonald || (A09_OldMacDonald = {}));
//# sourceMappingURL=main.js.map