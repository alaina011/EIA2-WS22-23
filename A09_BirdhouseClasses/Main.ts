namespace A09_BirdhouseClasses {

    /*
              Aufgabe: <A09.2_BirdhouseClasses>
              Name: <Alina Jana Hahn>
              Matrikel: <271344>
              Datum: < 17.12.2022 >
              Quellen: < Lisa Blindenhöfer >
              */


    window.addEventListener("load", handleLoad);

    interface Vector {
        x: number;
        y: number;
    }


    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    let horizont: number = 0.6;
  


    let background: ImageData;
    let snowflakes: Snowflake[] = [];
    let birds: Bird[] = [];



    function handleLoad(): void {
        console.log("load");

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        createSnowflakes();
        setInterval(update, 20);

    }

    function createSnowflakes(): void {
        console.log("create Snowflakes");

        for (let i: number = 0; i < 250; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflakes.push(snowflake);
        }

        for (let iBird: number = 0; iBird < 15; iBird++) {
            let bird: Bird = new Bird( "brown");
            birds.push(bird);
        }
    }

    function update(): void {
        console.log("update");
        crc2.putImageData(background, 0, 0);

        for (let snowflake of snowflakes) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }

        for (let bird of birds) {
            bird.drawFlying();
            bird.moveFlying(1 / 200);
        }

    }


    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);

        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(horizont, "lightgrey");
        gradient.addColorStop(1, "#C7F9CD");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        let startMountain: number = crc2.canvas.height * horizont;

        let posMountain: Vector = { x: 0, y: startMountain };



        drawSun({ x: 75, y: 75 });

        drawCloud({ x: 375, y: 150 }, { x: 325, y: 100 });

        drawMountain(posMountain, 200, 300, "grey", "white");
        drawMountain(posMountain, 100, 200, "grey", "white");

        drawTree({ x: 100, y: 500 }, -200);
        drawTree({ x: 300, y: 500 }, -200);
        drawTree({ x: 500, y: 500 }, -200);

        drawBirdhouse({ x: 400, y: 800 });

        drawSnowman({ x: 125, y: 740 });

        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }



    function drawSun(_position: Vector): void {

        let sunCircle: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        let r1: number = 25;
        let r2: number = 150;

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");



        sunCircle.save();
        sunCircle.translate(_position.x, _position.y);
        sunCircle.fillStyle = gradient;
        sunCircle.arc(0, 0, r2, 0, 2 * Math.PI);
        sunCircle.fill();
        sunCircle.restore();


    }


    function drawCloud(_position: Vector, _size: Vector): void {

        let cloudCircle: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        let nParicles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);


        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        cloudCircle.save();
        cloudCircle.translate(_position.x, _position.y);
        cloudCircle.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParicles; drawn++) {
            cloudCircle.save();

            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);

            cloudCircle.translate(x, y);
            cloudCircle.fill(particle);
            cloudCircle.restore();
        }
        cloudCircle.restore();


    }


    function drawMountain(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {

        let mountainLine: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        let stepMin: number = 100;
        let stepMax: number = 200;
        let x: number = 0;

        mountainLine.save();
        mountainLine.translate(_position.x, _position.y);

        mountainLine.beginPath();
        mountainLine.moveTo(0, 0);
        mountainLine.lineTo(0, - _max);


        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = - _min - Math.random() * (_max - _min);

            mountainLine.lineTo(x, y);
        } while (x < mountainLine.canvas.width);

        mountainLine.lineTo(x, 0);
        mountainLine.closePath();

        let gradient: CanvasGradient = mountainLine.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);

        mountainLine.fillStyle = gradient;
        mountainLine.fill();

        mountainLine.restore();


    }


    function drawTree(_position: Vector, _max: number): void {

        let tree: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


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

        let gradient: CanvasGradient = tree.createLinearGradient(0, 0, 0, _max);
        gradient.addColorStop(1, " white");
        gradient.addColorStop(0, " #C7F9CD");


        tree.fillStyle = gradient;
        tree.fill();
        tree.stroke();
        tree.restore();


    }


    function drawSnowman(_position: Vector): void {

        let snowmanCircle: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        let r1: number = 60;
        let r2: number = 50;
        let r3: number = 40;

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



    function drawBirdhouse(_position: Vector): void {

        let house: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

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
}
