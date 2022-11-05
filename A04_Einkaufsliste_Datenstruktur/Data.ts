namespace A04_Einkaufsliste_Datenstruktur {

    /*
          Aufgabe: <A04_Einkaufsliste_Datenstruktur>
          Name: <Alina Jana Hahn>
          Matrikel: <271344>
          Datum: < 05.11.2022  >
          Quellen: <   >
    */

    export interface Item {
        name: string;
        amount: number;
        comment: string;
        check: boolean;
        date: string;

    }

    export interface Data {
        [category: string]: Item[];
    }



    export let data: Data = {

        entry: [

            {
                name: "Gurke",
                amount: 2, 
                comment: "große Gurken",
                check: true,
                date: "20.10.2022"
            },
            { 
                name: "Milch", 
                amount: 1, 
                comment: "Flasche",
                check: false,
                date: "5.09.2022" 
            },
                
            { 
                name: "Reis", 
                amount: 4, 
                comment: "Tüten",
                check: false,
                date: "7.08.2022" 
            }

        ]


    };













}