var A02_EventInspector;
(function (A02_EventInspector) {
    /*
    Aufgabe: <A02_EventInspector>
    Name: <Alina Jana Hahn>
    Matrikel: <271344>
    Datum: <     >
    Quellen: <    >
    */
    // console.log("TS-Datei wird angezeigt")
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        let bodyListener = document.querySelector("body");
        let divListener = document.querySelector("div");
        let buttonListener = document.querySelector("button");
        bodyListener.addEventListener("click", logInfo);
        bodyListener.addEventListener("keyup", logInfo);
        divListener.addEventListener("click", logInfo);
        divListener.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        buttonListener.addEventListener("click", customEvent);
        document.addEventListener("customEvent", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let spanElement = document.createElement("span");
        let target = _event.target;
        target.appendChild(spanElement);
        spanElement.style.left = x + 10 + "px";
        spanElement.style.top = y + 10 + "px";
        spanElement.innerHTML = "x:" + x + "y:" + y + "<br>" + "target:" + target;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function customEvent(_event) {
        let button = _event.target;
        let event = new CustomEvent("customEvent", { bubbles: true });
        button.dispatchEvent(event);
        console.log(_event);
    }
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map