var A10_Polymorphie;
(function (A10_Polymorphie) {
    /*
                 Aufgabe: <A10_Polymorphie>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 14.01.2023 >
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
                this.position = new A10_Polymorphie.Vector(0, 0);
            }
            this.velocity = new A10_Polymorphie.Vector(0, 0);
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