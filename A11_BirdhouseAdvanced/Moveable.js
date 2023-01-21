var A11_BirdhouseAdvanced;
(function (A11_BirdhouseAdvanced) {
    /*
                 Aufgabe: <A11_BirdhouseAdvanced>
                 Name: <Alina Jana Hahn>
                 Matrikel: <271344>
                 Datum: < 21.01.2023 >
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
                this.position = new A11_BirdhouseAdvanced.Vector(0, 0);
            }
            this.velocity = new A11_BirdhouseAdvanced.Vector(0, 0);
        }
        move(_timeslice) { }
        ;
        moveFlying(_timeslice) { }
        ;
        draw() { }
        ;
        drawFlying() { }
        ;
        shoot() { }
        ;
    }
    A11_BirdhouseAdvanced.Moveable = Moveable;
})(A11_BirdhouseAdvanced || (A11_BirdhouseAdvanced = {}));
//# sourceMappingURL=Moveable.js.map