var A10_Polymorphie;
(function (A10_Polymorphie) {
    /*
                 Aufgabe: <A10_Polymorphie>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 14.01.2023 >
                 Quellen: <  >
                 */
    class Snowflake extends A10_Polymorphie.Moveable {
        draw() {
            // console.log("draw Snowflake");
            A10_Polymorphie.crc2.save();
            A10_Polymorphie.crc2.translate(this.position.x, this.position.y);
            A10_Polymorphie.crc2.beginPath();
            A10_Polymorphie.crc2.fillStyle = "white";
            A10_Polymorphie.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A10_Polymorphie.crc2.fill();
            A10_Polymorphie.crc2.restore();
        }
        move(_timeslice) {
            // console.log("move Snowflake");
            let offset = new A10_Polymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A10_Polymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10_Polymorphie.crc2.canvas.height;
            if (this.position.x > A10_Polymorphie.crc2.canvas.width)
                this.position.x -= A10_Polymorphie.crc2.canvas.width;
            if (this.position.y > A10_Polymorphie.crc2.canvas.height)
                this.position.y -= A10_Polymorphie.crc2.canvas.height;
        }
    }
    A10_Polymorphie.Snowflake = Snowflake;
})(A10_Polymorphie || (A10_Polymorphie = {}));
//# sourceMappingURL=Snowflake.js.map