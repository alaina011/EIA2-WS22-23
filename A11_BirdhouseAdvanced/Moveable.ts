namespace A11_BirdhouseAdvanced {

    /*
                 Aufgabe: <A11_BirdhouseAdvanced>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 21.01.2023 >
                 Quellen: <  >
                 */


    export class Moveable {

       protected position: Vector;
       protected velocity: Vector;


        constructor(_position?: Vector) {

            if (_position) {
                this.position = _position;
            }

            else {
                this.position = new Vector(0, 0);
            }


            this.velocity = new Vector(0, 0);
        }

       public move(_timeslice: number): void { };
       public moveFlying(_timeslice: number): void { };
       public draw(): void { };
       public drawFlying(): void { };
       public shoot(): void {};






    }


}