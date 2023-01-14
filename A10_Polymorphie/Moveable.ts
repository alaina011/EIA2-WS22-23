namespace A10_Polymorphie {

    /*
                 Aufgabe: <A10_Polymorphie>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 14.01.2023 >
                 Quellen: <  >
                 */


    export class Moveable {

        position: Vector;
        velocity: Vector;


        constructor(_position?: Vector) {

            if (_position) {
                this.position = _position;
            }

            else {
                this.position = new Vector(0, 0);
            }


            this.velocity = new Vector (0, 0);
        }

        move(_timeslice: number): void { };
        moveFlying(_timeslice: number): void { };
        draw(): void { };
        drawFlying(): void { };






    }


}