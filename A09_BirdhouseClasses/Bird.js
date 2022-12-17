var A09_BirdhouseClasses;
(function (A09_BirdhouseClasses) {
    /*
                 Aufgabe: <A09.2_BirdhouseClasses>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 17.12.2022 >
                 Quellen: < Lisa Blindenhöfer  >
                 */
    class Bird {
        position;
        velocity;
        type;
        color;
        constructor(_color) {
            this.position = new A09_BirdhouseClasses.Vector(0, 0);
            this.velocity = new A09_BirdhouseClasses.Vector(0, 0);
            this.color = _color;
        }
        moveFlying(_timeslice) {
            console.log("move Bird");
            let offset = new A09_BirdhouseClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A09_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A09_BirdhouseClasses.crc2.canvas.height;
            if (this.position.x > A09_BirdhouseClasses.crc2.canvas.width)
                this.position.x -= A09_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y > 500)
                this.position.y -= A09_BirdhouseClasses.crc2.canvas.height;
        }
        drawFlying() {
            console.log("draw flying Bird");
            A09_BirdhouseClasses.crc2.save();
            A09_BirdhouseClasses.crc2.translate(this.position.x, this.position.y);
            A09_BirdhouseClasses.crc2.beginPath();
            A09_BirdhouseClasses.crc2.fillStyle = this.color;
            A09_BirdhouseClasses.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A09_BirdhouseClasses.crc2.fill();
            A09_BirdhouseClasses.crc2.moveTo(1, 0);
            A09_BirdhouseClasses.crc2.bezierCurveTo(8, -5, 15, -10, 20, -2);
            A09_BirdhouseClasses.crc2.moveTo(-1, 0);
            A09_BirdhouseClasses.crc2.bezierCurveTo(-8, -5, -15, -10, -20, -2);
            A09_BirdhouseClasses.crc2.stroke();
            A09_BirdhouseClasses.crc2.strokeStyle = this.color;
            A09_BirdhouseClasses.crc2.restore();
        }
    }
    A09_BirdhouseClasses.Bird = Bird;
})(A09_BirdhouseClasses || (A09_BirdhouseClasses = {}));
//# sourceMappingURL=Bird.js.map