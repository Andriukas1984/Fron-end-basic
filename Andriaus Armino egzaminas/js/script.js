

    let rodyti = document.getElementById("btn_rodyti");

    rodyti.addEventListener("click", showResult);

    let LTU = grazintiLietuvius(testData);
    //console.log(LTU);
    document.getElementById("people").innerHTML= '<p>' + showPeople(LTU) + '</p>';


function showResult(){

    let name = document.getElementById("vardas").value;
    let bday = document.getElementById("data").value;


    let dataValue = document.getElementById("data").value;
    let data = new Date(dataValue);

    let day = data.getUTCDate();
    let month = data.getMonth() +1;
    // console.log(day);
    //console.log(month);


    let zodiakas = getZodiacSign(day, month);
    

    let res = "<h2>" + name +"</h2><br><p>" + "Gimimo diena: " + bday +"</p><br><p> Zodiako zenklas:" +  zodiakas;
    
    let res1 ="<h2>Neivestas vardas</h2><br><p>" + "Gimimo diena: " + bday +"</p>";
    let res2 ="<h2>" + name +"</h2><br><p>" + "<h2>Neivesta gimimo diena</h2></p>";
        
    
        
    if(name == ""){
        document.getElementById("result").innerHTML = res1;
    } else if (bday == ""){
        document.getElementById("result").innerHTML = res2;  
    } else {
        document.getElementById("result").innerHTML = res;
    }
        
    
}
function grazintiLietuvius(testData) {
return testData.filter(x => x.salis == "Lithuania" );
}

function showPeople(x) {
    var row = '';
    for (let i=0; i<x.lenght; i++)
    {
        row += x[i].vardas + ' ' + x[i].pavarde + '(' + x[i].salis +')';
    }
    return row;
}

    
                








    

  
 



      

    

    

