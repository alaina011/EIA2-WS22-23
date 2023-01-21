namespace A11_BirdhouseAdvanced {

    /*
                 Aufgabe: <A11_BirdhouseAdvanced>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 21.01.2023 >
                 Quellen: <   >
                 */


    export class Bird extends Moveable {


        private target: Vector;
        private color: string;
        private f: number = 0.1;

        constructor(_color: string) {

            super();

            this.color = _color;

        }

        public moveFlying(_timeslice: number): void {
            // console.log("move Bird");

            this.position.x = this.position.x + this.f * (this.target.x - this.position.x);
            this.position.y = this.position.y + this.f * (this.target.y - this.position.y);


            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > 500)
                this.position.y -= crc2.canvas.height;
        }

        public shoot(): void {
            console.log("shoot Bird");
        }



        public drawFlying(): void {
            // console.log("draw flying Bird");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.fill();


            crc2.moveTo(1, 0);
            crc2.bezierCurveTo(8, -5, 15, -10, 20, -2);
            crc2.moveTo(-1, 0);
            crc2.bezierCurveTo(-8, -5, -15, -10, -20, -2);
            crc2.stroke();
            crc2.strokeStyle = this.color;
            crc2.restore();
        }



        //     drawStanding(): void {
        //         console.log("draw standing ");

        //         let x: number = this.randomNumber(0, canvas.width);
        //         let y: number = this.randomNumber(600, 800);


        //         crc2.save();
        //         crc2.translate(x, y);

        //         crc2.beginPath();
        //         crc2.fillStyle = this.color;
        //         crc2.arc(0, 0, 10, 0, 2 * Math.PI);



        //         // body
        //         crc2.ellipse(-25, 20, 10, 25, 20, 0, 360);
        //         crc2.moveTo(-30, 30);
        //         crc2.lineTo(-30, 53);
        //         crc2.moveTo(-25, 30);
        //         crc2.lineTo(-25, 53);
        //         crc2.fill();

        //         // beak
        //         crc2.moveTo(1, -5);
        //         crc2.lineTo(20, -5);
        //         crc2.lineTo(1, 2);


        //         crc2.stroke();
        //         crc2.strokeStyle = this.color;
        //         crc2.restore();

        //     }

        //     randomNumber(min: number, max: number): number {

        //         min = Math.ceil(min);
        //         max = Math.floor(max);
        //         return Math.floor(Math.random() * (max - min) + min);
        //  }
        // }



    }
}