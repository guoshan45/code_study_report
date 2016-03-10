var  alarm = "Dragons approach!";

try {
	alert(alarm);
}catch (error){
	alert("Uh oh...\n" + error);
}

try{
    var newHallOfFame = ["Dask Frostring", "Render Tallborn"];
    if (list === undefined){
        throw new ReferenceError();
    }
    if ((list instanceof Array) === false){
        throw TypeError();
    }
    list.concat(newHallOfFame);
} catch (error){
    if (error instanceof ReferenceError){
    	alert(error + "\n" +
    		"The HoF roster does not exist as \"list\"!\n"+
    		"Check for relocation in master document.");
    }
    if (error instanceof TypeError){
    	alert(error + "\n"+
    		"Alas, the Hall's list has no concat method.\n"+
    		"Check for a disastrous overwrite!");
    }
}
finally{
    console.log(list);
}

//The finally block follows try/catch, and holds code that should execute whether any errors were present or not.


