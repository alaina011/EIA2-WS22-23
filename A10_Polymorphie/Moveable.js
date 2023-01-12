var A10_Polymorphie;
(function (A10_Polymorphie) {
    /*
                 Aufgabe: <A10_Polymorphie>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 12.01.2023 >
                 Quellen: <  >
                 */
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position) {
                this.position = _position;
            }
            else {
                this.position.x = A10_Polymorphie.randomNumber(0, 600);
                this.position.y = A10_Polymorphie.randomNumber(0, 800);
            }
            this.velocity.x = A10_Polymorphie.randomNumber(100, 200);
            this.velocity.y = A10_Polymorphie.randomNumber(100, 200);
        }
        move(_timeslice) { }
        ;
        moveFlying(_timeslice) { }
        ;
        draw() { }
        ;
        drawFlying() { }
        ;
    }
    A10_Polymorphie.Moveable = Moveable;
})(A10_Polymorphie || (A10_Polymorphie = {}));
//# sourceMappingURL=Moveable.js.map