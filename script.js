


document.getElementById("calculate").addEventListener("click", function (){

    var bill  = Number(document.getElementById("bill").value);
    var length  = Number(document.getElementById("length").value);
    var width  = Number(document.getElementById("width").value);
    var service = Number(document.getElementById("service").value);
    var result =  document.getElementById("result");
    let sq_Meter = ((length+service)*(width+service)/10000) ;
    
    let finalResult = ((bill)*sq_Meter);
    
    result.innerHTML= "Item Weight " +finalResult +" g.";
    
    

});

