namespace A08_Winterlandscape {

    /*
              Aufgabe: <A08.2_Winterlandscape>
              Name: <Alina Jana Hahn>
              Matrikel: <271344>
              Datum: <03.12.2022>
              Quellen: < Videos der Lektion, w3schools, Lisa Blindenhöfer, Nathan Haider>
              */


    window.addEventListener("load", handleLoad);

    interface Vector {
        x: number;
        y: number;
    }

    let horizont: number = 0.6;


    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    function handleLoad(): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


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


        drawBird({ x: 400, y: 620 }, "black");
        drawBird({ x: 250, y: 725 }, "brown");
        drawBird({ x: 50, y: 525 }, "green");

        drawMirrorBird({x: 450, y: 620}, "green");
        drawMirrorBird({x: 382, y: 423}, "brown");


        drawFlyingBird({ x: 300, y: 200 }, "green");
        drawFlyingBird({ x: 200, y: 100 }, "black");
        drawFlyingBird({ x: 100, y: 300 }, "blue");
        drawFlyingBird({ x: 500, y: 250 }, "brown");
        drawFlyingBird({ x: 450, y: 50 }, "green");
        drawFlyingBird({ x: 150, y: 150 }, "blue");
        drawFlyingBird({ x: 250, y: 250 }, "brown");
        drawFlyingBird({ x: 50, y: 200 }, "black");
        drawFlyingBird({ x: 450, y: 100 }, "brown");
        drawFlyingBird({ x: 575, y: 200 }, "black");
        drawFlyingBird({ x: 325, y: 125 }, "green");
        drawFlyingBird({ x: 125, y: 275 }, "blue");
        drawFlyingBird({ x: 475, y: 200 }, "blue");
        drawFlyingBird({ x: 75, y: 125 }, "brown");
        drawFlyingBird({ x: 425, y: 275 }, "black");


        drawSnowflake({ x: 400, y: 200 });
        drawSnowflake({ x: 200, y: 500 });
        drawSnowflake({ x: 550, y: 700 });
        drawSnowflake({ x: 100, y: 150 });
        drawSnowflake({ x: 50, y: 750 });
        drawSnowflake({ x: 300, y: 600 });
        drawSnowflake({ x: 400, y: 200 });
        drawSnowflake({ x: 150, y: 300 });
        drawSnowflake({ x: 500, y: 450 });


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


    function drawBird(_position: Vector, _color: string): void {

        let bird: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        bird.save();
        bird.translate(_position.x, _position.y);

        for (let drawn: number = 0; drawn <= 5; drawn++) {

            bird.beginPath();
            bird.fillStyle = _color;
            bird.arc(0, 0, 10, 0, 2 * Math.PI);



            // body
            bird.ellipse(-25, 20, 10, 25, 20, 0, 360);
            bird.moveTo(-30, 30);
            bird.lineTo(-30, 53);
            bird.moveTo(-25, 30);
            bird.lineTo(-25, 53);
            bird.fill();

            // beak
            bird.moveTo(1, -5);
            bird.lineTo(20, -5);
            bird.lineTo(1, 2);


            bird.stroke();
            bird.strokeStyle = _color;

        }
        bird.restore();

    }



    function drawMirrorBird(_position: Vector, _color: string): void {

        let bird: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

        bird.save();
        bird.translate(_position.x, _position.y);
        bird.scale(-1, 1);

        for (let drawn: number = 0; drawn <= 5; drawn++) {

            bird.beginPath();
            bird.fillStyle = _color;
            bird.arc(0, 0, 10, 0, 2 * Math.PI);



            // body
            bird.ellipse(-25, 20, 10, 25, 20, 0, 360);
            bird.moveTo(-30, 30);
            bird.lineTo(-30, 53);
            bird.moveTo(-25, 30);
            bird.lineTo(-25, 53);
            bird.fill();

            // beak
            bird.moveTo(1, -5);
            bird.lineTo(20, -5);
            bird.lineTo(1, 2);


            bird.stroke();
            bird.strokeStyle = _color;

        }
     
        bird.restore();

    }




    function drawFlyingBird(_position: Vector, _color: string): void {

        let flyingBird: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


        flyingBird.save();
        flyingBird.translate(_position.x, _position.y);


        for (let drawn: number = 0; drawn <= 15; drawn++) {


            flyingBird.beginPath();
            flyingBird.fillStyle = _color;
            flyingBird.arc(0, 0, 5, 0, 2 * Math.PI);
            flyingBird.fill();


            flyingBird.moveTo(1, 0);
            flyingBird.bezierCurveTo(8, -5, 15, -10, 20, -2);
            flyingBird.moveTo(-1, 0);
            flyingBird.bezierCurveTo(-8, -5, -15, -10, -20, -2);
            flyingBird.stroke();
            flyingBird.strokeStyle = _color;

        }
        flyingBird.restore();

    }






    function drawSnowflake(_position: Vector): void {

        let snowflakeLine: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


        snowflakeLine.save();
        snowflakeLine.translate(_position.x, _position.y);

        snowflakeLine.beginPath();
        snowflakeLine.fillStyle = "white";
        snowflakeLine.arc(0, 0, 5, 0, 2 * Math.PI);
        snowflakeLine.fill();
        snowflakeLine.restore();

    }



}