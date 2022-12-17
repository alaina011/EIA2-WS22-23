namespace A09_BirdhouseClasses {

    /*
                 Aufgabe: <A09.2_BirdhouseClasses>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 17.12.2022 >
                 Quellen: < Lisa Blindenhöfer >
                 */


    export class Snowflake {
        position: Vector;
        velocity: Vector;


        constructor() {
            console.log("Snowflake constructor");

            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }


        draw(): void {
            console.log("draw Snowflake");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }


        move(_timeslice: number): void {
            console.log("move Snowflake");

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);


            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }



    }






}