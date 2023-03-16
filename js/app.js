let myArray = [ "time", "password","date", "text"]

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

