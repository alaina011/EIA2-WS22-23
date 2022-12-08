namespace A09_OldMacDonald {

/*
              Aufgabe: <A09_OldMacDonald>
              Name: <Alina Jana Hahn>
              Matrikel: <271344>
              Datum: < 08.12.2022>
              Quellen: <   >
              */



export class Animals {
    name: string;
    species: string;
    food: string;
    amountFood: number;
    sounds: string;
    lyric: string;
    eaten: number;

        constructor(_name: string, _species: string, _food: string, _amountFood: number, _sounds: string, _eaten: number) {
                this.name = _name;
                this.species = _species;
                this.food = _food;
                this.amountFood = _amountFood;
                this.sounds = _sounds;
                this.eaten = _eaten;
                this.lyric = "And on that Farm he had a " + this.species + ".<br>" + " The " + this.species + " named " + this.name + "." + " With a " + this.sounds + " and eats " + this.eaten + " of " + this.food + ".<br>"; 

        }



        sing(): string {

            console.log(this.lyric);

            return this.lyric;

        }

        eat(): string {

            let update: number = this.amountFood - this.eaten;

            return update.toString();
         }

    }

}
