var A11_BirdhouseAdvanced;
(function (A11_BirdhouseAdvanced) {
    /*
                 Aufgabe: <A11_BirdhouseAdvanced>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 21.01.2023 >
                 Quellen: <  >
                 */
    class Snowflake extends A11_BirdhouseAdvanced.Moveable {
        draw() {
            // console.log("draw Snowflake");
            A11_BirdhouseAdvanced.crc2.save();
            A11_BirdhouseAdvanced.crc2.translate(this.position.x, this.position.y);
            A11_BirdhouseAdvanced.crc2.beginPath();
            A11_BirdhouseAdvanced.crc2.fillStyle = "white";
            A11_BirdhouseAdvanced.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A11_BirdhouseAdvanced.crc2.fill();
            A11_BirdhouseAdvanced.crc2.restore();
        }
        move(_timeslice) {
            // console.log("move Snowflake");
            let offset = new A11_BirdhouseAdvanced.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A11_BirdhouseAdvanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A11_BirdhouseAdvanced.crc2.canvas.height;
            if (this.position.x > A11_BirdhouseAdvanced.crc2.canvas.width)
                this.position.x -= A11_BirdhouseAdvanced.crc2.canvas.width;
            if (this.position.y > A11_BirdhouseAdvanced.crc2.canvas.height)
                this.position.y -= A11_BirdhouseAdvanced.crc2.canvas.height;
        }
    }
    A11_BirdhouseAdvanced.Snowflake = Snowflake;
})(A11_BirdhouseAdvanced || (A11_BirdhouseAdvanced = {}));
//# sourceMappingURL=Snowflake.js.map