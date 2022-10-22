namespace A02_EventInspector {

    /*
    Aufgabe: <A02_EventInspector>
    Name: <Alina Jana Hahn>
    Matrikel: <271344>
    Datum: <     >
    Quellen: <    >
    */

    // console.log("TS-Datei wird angezeigt")

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        document.addEventListener("mousemove", setInfoBox);

        let bodyListener: HTMLElement = document.querySelector("body");
        let divListener: HTMLElement = document.querySelector("div");
        let buttonListener: HTMLElement = document.querySelector("button");

        bodyListener.addEventListener("click", logInfo);
        bodyListener.addEventListener("keyup", logInfo);

        divListener.addEventListener("click", logInfo);
        divListener.addEventListener("keyup", logInfo);

        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        buttonListener.addEventListener("click", customEvent);
        document.addEventListener("customEvent", logInfo);

    }


    function setInfoBox(_event: MouseEvent): void {

        
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let spanElement: HTMLSpanElement = document.createElement("span");
        let target: HTMLElement = <HTMLElement>_event.target;


        if ( spanElement && true ) {

            
            
            }
    


        target.appendChild(spanElement);

        spanElement.style.left = x + 10 + "px";
        spanElement.style.top = y + 10 + "px";

        spanElement.innerHTML = "x:" + x + "y:" + y + "<br>" + "target:" + target;

    }


    function logInfo(_event: Event): void {

        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);

    }


    function customEvent(_event: Event): void {

        let button: HTMLElement = <HTMLElement>_event.target;
        let event: CustomEvent = new CustomEvent("customEvent", { bubbles: true });

        button.dispatchEvent(event);
        console.log(_event);



    }


}