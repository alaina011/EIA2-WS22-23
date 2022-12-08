var A09_OldMacDonald;
(function (A09_OldMacDonald) {
    /*
                  Aufgabe: <A09_OldMacDonald>
                  Name: <Alina Jana Hahn>
                  Matrikel: <271344>
                  Datum: < 08.12.2022>
                  Quellen: <   >
                  */
    class Animals {
        name;
        species;
        food;
        amountFood;
        sounds;
        lyric;
        eaten;
        constructor(_name, _species, _food, _amountFood, _sounds, _eaten) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.amountFood = _amountFood;
            this.sounds = _sounds;
            this.eaten = _eaten;
            this.lyric = "And on that Farm he had a " + this.species + ".<br>" + " The " + this.species + " named " + this.name + "." + " With a " + this.sounds + " and eats " + this.eaten + " of " + this.food + ".<br>";
        }
        sing() {
            console.log(this.lyric);
            return this.lyric;
        }
        eat() {
            let update = this.amountFood - this.eaten;
            return update.toString();
        }
    }
    A09_OldMacDonald.Animals = Animals;
})(A09_OldMacDonald || (A09_OldMacDonald = {}));
//# sourceMappingURL=Animal.js.map