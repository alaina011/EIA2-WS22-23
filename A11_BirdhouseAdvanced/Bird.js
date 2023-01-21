var A11_BirdhouseAdvanced;
(function (A11_BirdhouseAdvanced) {
    /*
                 Aufgabe: <A11_BirdhouseAdvanced>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 21.01.2023 >
                 Quellen: <   >
                 */
    class Bird extends A11_BirdhouseAdvanced.Moveable {
        color;
        constructor(_color) {
            super();
            this.color = _color;
        }
        moveFlying(_timeslice) {
            // console.log("move Bird");
            let offset = new A11_BirdhouseAdvanced.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A11_BirdhouseAdvanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A11_BirdhouseAdvanced.crc2.canvas.height;
            if (this.position.x > A11_BirdhouseAdvanced.crc2.canvas.width)
                this.position.x -= A11_BirdhouseAdvanced.crc2.canvas.width;
            if (this.position.y > 500)
                this.position.y -= A11_BirdhouseAdvanced.crc2.canvas.height;
        }
        shoot() {
            console.log("shoot Bird");
        }
        drawFlying() {
            // console.log("draw flying Bird");
            A11_BirdhouseAdvanced.crc2.save();
            A11_BirdhouseAdvanced.crc2.translate(this.position.x, this.position.y);
            A11_BirdhouseAdvanced.crc2.beginPath();
            A11_BirdhouseAdvanced.crc2.fillStyle = this.color;
            A11_BirdhouseAdvanced.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A11_BirdhouseAdvanced.crc2.fill();
            A11_BirdhouseAdvanced.crc2.moveTo(1, 0);
            A11_BirdhouseAdvanced.crc2.bezierCurveTo(8, -5, 15, -10, 20, -2);
            A11_BirdhouseAdvanced.crc2.moveTo(-1, 0);
            A11_BirdhouseAdvanced.crc2.bezierCurveTo(-8, -5, -15, -10, -20, -2);
            A11_BirdhouseAdvanced.crc2.stroke();
            A11_BirdhouseAdvanced.crc2.strokeStyle = this.color;
            A11_BirdhouseAdvanced.crc2.restore();
        }
    }
    A11_BirdhouseAdvanced.Bird = Bird;
})(A11_BirdhouseAdvanced || (A11_BirdhouseAdvanced = {}));
//# sourceMappingURL=Bird.js.map