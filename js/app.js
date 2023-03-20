let myArray = [ "time", "password","date", "text", "button", "week"]

// myArray.forEach(x => console.log(x));


class CrazyInput {
    constructor(parentID, type){
        this.parentID = parentID;
        this.type = type;
    }


    CrazyRender(){
        let myApp = document.getElementById(this.parentID);

        const myCrazyInput = myApp.innerHTML + "<input type="+ this.type +"> <br><br>";

        myApp.innerHTML = myCrazyInput;
    }
}

/* 
let someInput = new CrazyInput("app","text");
someInput.CrazyRender(); */


function RenderCrazyInputs(input)
{
    let myCrazyInput = new CrazyInput ("app",input);
    myCrazyInput.CrazyRender();
}


myArray.forEach(x=>RenderCrazyInputs(x));

let filteredCrazyArray = myArray.filter(a=>a=="time"|| a=="button");
console.log(filteredCrazyArray);//para chequear


// Voy a probar una función que me deje cambiar el parent id 


function RenderCrazyInputsGeneral(parentID, input)
{
    let myCrazyInput = new CrazyInput (parentID,input);
    myCrazyInput.CrazyRender();
}


filteredCrazyArray.forEach(y=>RenderCrazyInputsGeneral("appFiltered",y));



