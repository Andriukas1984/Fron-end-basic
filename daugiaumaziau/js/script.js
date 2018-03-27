	
	var rodyti = document.getElementById("btn_rodyti");

    rodyti.addEventListener("click", showResult);
	
	
	function showResult(){
		
		
			var sk = parseInt(document.getElementById("skaicius").value);
			
		
			var res = "<h2>Ivestas skaicius per mazas</h2>";
			var res1 = "<h2>Ivestas skaicius per didelis</h2>";
			var res2 = "<h2>" + sk + "</h2>";
			
			var x = 10;
			var y = 20;
			
			if(sk < x ){
			document.getElementById("result").innerHTML = res;
		} else if (sk > y ){
			document.getElementById("result").innerHTML = res1;  
		} else {
			document.getElementById("result").innerHTML = res2;
		}
		
	}
	