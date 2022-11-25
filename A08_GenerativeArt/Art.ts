namespace A08_GenerativeArt {

       /*
              Aufgabe: <A08.1_GenerativeArt>
              Name: <Alina Jana Hahn>
              Matrikel: <271344>
              Datum: <25.11.2022>
              Quellen: <Pia Giovannelli, Jonas Atzenhofer, w3 schools, zusammengearbeitet mit Anna Wintermantel>
              */


       window.addEventListener("load", handleLoad);


       let crc2: CanvasRenderingContext2D;
       let canvas: HTMLCanvasElement;


       function handleLoad(): void {

              canvas = <HTMLCanvasElement>document.querySelector("canvas");
              crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


              crc2.fillStyle = "#EFEDDE";
              crc2.fillRect(150, 50, crc2.canvas.width, crc2.canvas.height);

              crc2.translate( 140, 50);

              drawCircle();
              drawEllipse();
              drawLine();



       }


       function drawCircle(): void {

              let size: number = randomNumber(1, 150);
              let circle: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

              circle.fillStyle = "blue";
              circle.strokeStyle = "blue";

              for (let i: number = 0; i < 10; i++) {

                     let x: number = Math.random() * circle.canvas.width;
                     let y: number = Math.random() * circle.canvas.height;

                     circle.beginPath();
                     circle.arc(x, y, size, 0, 2 * Math.PI);
                     circle.fill();
                     circle.closePath();
                     circle.stroke();


              }



       }


       function drawEllipse(): void {

              let size: number = randomNumber(1, 150);
              let ellipse: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

              ellipse.fillStyle = "red";
              ellipse.strokeStyle = "red";
              for (let i: number = 0; i < 10; i++) {

                     let x: number = Math.random() * ellipse.canvas.width;
                     let y: number = Math.random() * ellipse.canvas.height;

                     ellipse.beginPath();
                     ellipse.ellipse(x, y, size, 15, 5, 0, 360);
                     ellipse.fill();
                     ellipse.closePath();
                     ellipse.stroke();
                     


              }


       }


       function drawLine(): void {

              let color: string[] = ["grey", "#AFFF65", "#FF9F92"];

              for (let i: number = 0; i < color.length; i++)
                     for (let index: number = 0; index < 50; index++) {
                            let a: number = randomNumber(0, canvas.width);
                            let b: number = randomNumber(0, canvas.height);
                            let c: number = randomNumber(0, canvas.width);
                            let d: number = randomNumber(0, canvas.height);

                            crc2.beginPath();

                            crc2.moveTo(a, b);
                            crc2.lineTo(c, d);
                            crc2.stroke();
                            crc2.strokeStyle = color[i];


                     }


       }




       function randomNumber(min: number, max: number): number {

              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min) + min);
       }






}