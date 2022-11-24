var A08_GenerativeArt;
(function (A08_GenerativeArt) {
    /*
           Aufgabe: <A08.1_GenerativeArt>
           Name: <Alina Jana Hahn>
           Matrikel: <271344>
           Datum: <>
           Quellen: < >
           */
    window.addEventListener("load", handleLoad);
    let crc2;
    let canvas;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#EFEDDE";
        crc2.fillRect(150, 50, crc2.canvas.width, crc2.canvas.height);
        drawCircle();
        drawTriangle();
        drawEllipse();
        drawLine();
    }
    function drawCircle() {
        let size = randomNumber(1, 150);
        crc2.beginPath();
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.arc(x, y, size, 0, 2 * Math.PI);
        }
        crc2.stroke();
        crc2.fillStyle = color();
    }
    function drawTriangle() {
        let point = randomNumber(5, 10);
        crc2.beginPath();
        // for (let i: number = 0; i < point; i++) {
        //        let x: number = randomNumber(0, 150) - randomNumber(0, 150);
        //        let y: number = randomNumber(0, 150) - randomNumber(0, 150);
        //        crc2.lineTo(x, y);
        // }
        crc2.closePath();
        crc2.stroke();
    }
    function drawEllipse() {
        let size = randomNumber(1, 150);
        crc2.beginPath();
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.ellipse(x, y, size, 15, 5, 0, 360);
        }
        crc2.stroke();
    }
    function drawLine() {
        let color = ["grey", "#AFFF65", "#FF9F92"];
        for (let i = 0; i < color.length; i++)
            for (let index = 0; index < 50; index++) {
                let a = randomNumber(0, canvas.width);
                let b = randomNumber(0, canvas.height);
                let c = randomNumber(0, canvas.width);
                let d = randomNumber(0, canvas.height);
                crc2.beginPath();
                crc2.strokeStyle = color[i];
                crc2.moveTo(a, b);
                crc2.lineTo(c, d);
                crc2.stroke();
            }
    }
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function color() {
        let letter = "0123456789ABCDEF";
        let colorsign = "#";
        for (let i = 0; i < 8; i++) {
            colorsign += letter[Math.floor(Math.random() * 12)];
        }
        return colorsign;
    }
})(A08_GenerativeArt || (A08_GenerativeArt = {}));
//# sourceMappingURL=Art.js.map