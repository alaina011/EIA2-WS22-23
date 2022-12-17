var A09_BirdhouseClasses;
(function (A09_BirdhouseClasses) {
    /*
              Aufgabe: <A09.2_BirdhouseClasses>
              Name: <Alina Jana Hahn>
              Matrikel: <271344>
              Datum: < 17.12.2022 >
              Quellen: < Lisa Blindenhöfer >
              */
    window.addEventListener("load", handleLoad);
    let horizont = 0.6;
    let background;
    let snowflakes = [];
    let birds = [];
    // let standingBirds: Bird[] = [];
    function handleLoad() {
        console.log("load");
        A09_BirdhouseClasses.canvas = document.querySelector("canvas");
        A09_BirdhouseClasses.crc2 = A09_BirdhouseClasses.canvas.getContext("2d");
        drawBackground();
        createSnowflakes();
        setInterval(update, 20);
    }
    function createSnowflakes() {
        console.log("create Snowflakes");
        for (let i = 0; i < 250; i++) {
            let snowflake = new A09_BirdhouseClasses.Snowflake();
            snowflakes.push(snowflake);
        }
        for (let iBird = 0; iBird < 15; iBird++) {
            let bird = new A09_BirdhouseClasses.Bird("brown");
            birds.push(bird);
        }
        // for (let iStanding: number = 0; iStanding < 5; iStanding++){
        //     let standingBird: Bird = new Bird("black");
        //     standingBirds.push(standingBird);
        // }
    }
    function update() {
        console.log("update");
        A09_BirdhouseClasses.crc2.putImageData(background, 0, 0);
        for (let snowflake of snowflakes) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
        for (let bird of birds) {
            bird.drawFlying();
            bird.moveFlying(1 / 200);
        }
        // for (let standingBird of standingBirds) {
        //     standingBird.drawStanding();
        // }
    }
    function drawStanding() {
        console.log("draw standing ");
        let x = randomNumber(0, A09_BirdhouseClasses.canvas.width);
        let y = randomNumber(600, 800);
        A09_BirdhouseClasses.crc2.save();
        A09_BirdhouseClasses.crc2.translate(x, y);
        A09_BirdhouseClasses.crc2.beginPath();
        A09_BirdhouseClasses.crc2.fillStyle = "black";
        A09_BirdhouseClasses.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
        // body
        A09_BirdhouseClasses.crc2.ellipse(-25, 20, 10, 25, 20, 0, 360);
        A09_BirdhouseClasses.crc2.moveTo(-30, 30);
        A09_BirdhouseClasses.crc2.lineTo(-30, 53);
        A09_BirdhouseClasses.crc2.moveTo(-25, 30);
        A09_BirdhouseClasses.crc2.lineTo(-25, 53);
        A09_BirdhouseClasses.crc2.fill();
        // beak
        A09_BirdhouseClasses.crc2.moveTo(1, -5);
        A09_BirdhouseClasses.crc2.lineTo(20, -5);
        A09_BirdhouseClasses.crc2.lineTo(1, 2);
        A09_BirdhouseClasses.crc2.stroke();
        A09_BirdhouseClasses.crc2.strokeStyle = "black";
        A09_BirdhouseClasses.crc2.restore();
    }
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function drawBackground() {
        let gradient = A09_BirdhouseClasses.crc2.createLinearGradient(0, 0, 0, A09_BirdhouseClasses.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(horizont, "lightgrey");
        gradient.addColorStop(1, "#C7F9CD");
        A09_BirdhouseClasses.crc2.fillStyle = gradient;
        A09_BirdhouseClasses.crc2.fillRect(0, 0, A09_BirdhouseClasses.crc2.canvas.width, A09_BirdhouseClasses.crc2.canvas.height);
        let startMountain = A09_BirdhouseClasses.crc2.canvas.height * horizont;
        let posMountain = { x: 0, y: startMountain };
        drawSun({ x: 75, y: 75 });
        drawCloud({ x: 375, y: 150 }, { x: 325, y: 100 });
        drawMountain(posMountain, 200, 300, "grey", "white");
        drawMountain(posMountain, 100, 200, "grey", "white");
        drawTree({ x: 100, y: 500 }, -200);
        drawTree({ x: 300, y: 500 }, -200);
        drawTree({ x: 500, y: 500 }, -200);
        drawBirdhouse({ x: 400, y: 800 });
        drawSnowman({ x: 125, y: 740 });
        drawStanding();
        background = A09_BirdhouseClasses.crc2.getImageData(0, 0, A09_BirdhouseClasses.crc2.canvas.width, A09_BirdhouseClasses.crc2.canvas.height);
    }
    function drawSun(_position) {
        let sunCircle = A09_BirdhouseClasses.canvas.getContext("2d");
        let r1 = 25;
        let r2 = 150;
        let gradient = A09_BirdhouseClasses.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        sunCircle.save();
        sunCircle.translate(_position.x, _position.y);
        sunCircle.fillStyle = gradient;
        sunCircle.arc(0, 0, r2, 0, 2 * Math.PI);
        sunCircle.fill();
        sunCircle.restore();
    }
    function drawCloud(_position, _size) {
        let cloudCircle = A09_BirdhouseClasses.canvas.getContext("2d");
        let nParicles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = A09_BirdhouseClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        cloudCircle.save();
        cloudCircle.translate(_position.x, _position.y);
        cloudCircle.fillStyle = gradient;
        for (let drawn = 0; drawn < nParicles; drawn++) {
            cloudCircle.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            cloudCircle.translate(x, y);
            cloudCircle.fill(particle);
            cloudCircle.restore();
        }
        cloudCircle.restore();
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        let mountainLine = A09_BirdhouseClasses.canvas.getContext("2d");
        let stepMin = 100;
        let stepMax = 200;
        let x = 0;
        mountainLine.save();
        mountainLine.translate(_position.x, _position.y);
        mountainLine.beginPath();
        mountainLine.moveTo(0, 0);
        mountainLine.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            mountainLine.lineTo(x, y);
        } while (x < mountainLine.canvas.width);
        mountainLine.lineTo(x, 0);
        mountainLine.closePath();
        let gradient = mountainLine.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);
        mountainLine.fillStyle = gradient;
        mountainLine.fill();
        mountainLine.restore();
    }
    function drawTree(_position, _max) {
        let tree = A09_BirdhouseClasses.canvas.getContext("2d");
        // Tree Trunk
        tree.save();
        tree.translate(_position.x, _position.y);
        tree.beginPath();
        tree.fillStyle = "#EBA388 ";
        tree.fillRect(0, 0, 20, -75);
        // Tree Crown
        tree.arc(-10, -75, 25, 0.7, 1 * Math.PI);
        tree.lineTo(15, -200);
        tree.lineTo(45, -75);
        tree.arc(20, -75, 25, 0, 0.7 * Math.PI);
        let gradient = tree.createLinearGradient(0, 0, 0, _max);
        gradient.addColorStop(1, " white");
        gradient.addColorStop(0, " #C7F9CD");
        tree.fillStyle = gradient;
        tree.fill();
        tree.stroke();
        tree.restore();
    }
    function drawSnowman(_position) {
        let snowmanCircle = A09_BirdhouseClasses.canvas.getContext("2d");
        let r1 = 60;
        let r2 = 50;
        let r3 = 40;
        snowmanCircle.save();
        snowmanCircle.translate(_position.x, _position.y);
        snowmanCircle.beginPath();
        snowmanCircle.fillStyle = "white";
        snowmanCircle.arc(0, 0, r1, 0, 2 * Math.PI);
        snowmanCircle.moveTo(50, -110);
        snowmanCircle.arc(0, -110, r2, 0, 2 * Math.PI);
        snowmanCircle.moveTo(40, -200);
        snowmanCircle.arc(0, -200, r3, 0, 2 * Math.PI);
        snowmanCircle.fill();
        snowmanCircle.stroke();
        snowmanCircle.restore();
    }
    function drawBirdhouse(_position) {
        let house = A09_BirdhouseClasses.canvas.getContext("2d");
        // Trunk
        house.save();
        house.translate(_position.x, _position.y);
        house.beginPath();
        house.fillStyle = "#EB8A61";
        house.fillRect(0, 0, 20, -125);
        // House
        house.moveTo(10, -125);
        house.lineTo(-100, -125);
        house.lineTo(-100, -250);
        house.lineTo(10, -325);
        house.lineTo(120, -250);
        house.lineTo(-100, -250);
        house.moveTo(120, -250);
        house.lineTo(120, -125);
        house.lineTo(10, -125);
        house.strokeStyle = "#EB8A61";
        house.lineWidth = 5;
        house.stroke();
        house.restore();
    }
})(A09_BirdhouseClasses || (A09_BirdhouseClasses = {}));
//# sourceMappingURL=Main.js.map