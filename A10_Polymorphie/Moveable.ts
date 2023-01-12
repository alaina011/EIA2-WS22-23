namespace A10_Polymorphie {

    /*
                 Aufgabe: <A10_Polymorphie>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 12.01.2023 >
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
                this.position.x = randomNumber(0, 600);
                this.position.y = randomNumber(0, 800);
            }


            this.velocity.x = randomNumber(100, 200);
            this.velocity.y = randomNumber(100, 200);
        }

        move(_timeslice: number): void { };
        moveFlying(_timeslice: number): void { };
        draw(): void { };
        drawFlying(): void { };






    }


}