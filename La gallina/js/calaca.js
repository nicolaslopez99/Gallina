function aleatorio(piso,techo){
	return Math.floor(Math.random() * (techo - piso + 1)) + piso;
}

function Calaca(x,y){
	var opc = aleatorio(1,3);
	if(opc==1)
		this.img = $("#calaca_1")[0];	
	else if(opc==2)
		this.img = $("#calaca_2")[0];		
	else 
		this.img = $("#calaca_2")[0];
	this.x = aleatorio(0,620);
	this.y = aleatorio(100,330);
	this.velocidad = 0;
	while(this.velocidad == 0)
		this.velocidad=aleatorio(-7,7);
			
	this.dibujar = function(ctx){
		var img = this.img;
		ctx.drawImage(img,this.x,this.y);
	}
	
	this.actualizar = function(){
		this.x += this.velocidad;
		this.x = (640 + this.x)%640;
	}
}
