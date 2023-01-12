var A10_Polymorphie;
(function (A10_Polymorphie) {
    /*
                 Aufgabe: <A10 Polymorphie>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 12.01.2023 >
                 Quellen: <   >
                 */
    class Bird extends A10_Polymorphie.Moveable {
        type;
        color;
        constructor(_color) {
            super();
            this.color = _color;
        }
        moveFlying(_timeslice) {
            console.log("move Bird");
            let offset = new A10_Polymorphie.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A10_Polymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10_Polymorphie.crc2.canvas.height;
            if (this.position.x > A10_Polymorphie.crc2.canvas.width)
                this.position.x -= A10_Polymorphie.crc2.canvas.width;
            if (this.position.y > 500)
                this.position.y -= A10_Polymorphie.crc2.canvas.height;
        }
        drawFlying() {
            console.log("draw flying Bird");
            A10_Polymorphie.crc2.save();
            A10_Polymorphie.crc2.translate(this.position.x, this.position.y);
            A10_Polymorphie.crc2.beginPath();
            A10_Polymorphie.crc2.fillStyle = this.color;
            A10_Polymorphie.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A10_Polymorphie.crc2.fill();
            A10_Polymorphie.crc2.moveTo(1, 0);
            A10_Polymorphie.crc2.bezierCurveTo(8, -5, 15, -10, 20, -2);
            A10_Polymorphie.crc2.moveTo(-1, 0);
            A10_Polymorphie.crc2.bezierCurveTo(-8, -5, -15, -10, -20, -2);
            A10_Polymorphie.crc2.stroke();
            A10_Polymorphie.crc2.strokeStyle = this.color;
            A10_Polymorphie.crc2.restore();
        }
    }
    A10_Polymorphie.Bird = Bird;
})(A10_Polymorphie || (A10_Polymorphie = {}));
//# sourceMappingURL=Bird.js.map