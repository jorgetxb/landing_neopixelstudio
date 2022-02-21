
window.onload = function () {
    //Creación de capa Sky
  
  	var x = document.createElement("div");
  	x.className = "sky";
  	document.querySelector('#hero').appendChild(x);

	//Creación de capa sky2  
  
  	var w = document.createElement("div");
  	w.className = "sky2";
  	document.querySelector('#hero').appendChild(w);
  
	//Agregado de ShoothingStars  
  
  	var y = document.createElement("div");
  	y.className = "s_star";
  	document.querySelector('.sky').appendChild(y);
  
    var v = document.createElement("div");
  	v.className = "s_star";
  	document.querySelector('.sky').appendChild(v);
  
    var u = document.createElement("div");
  	u.className = "s_star";
  	document.querySelector('.sky').appendChild(u);
  
  
  	//Creación de Estrellas

    var z = {};
    var stars = 200;

    for (i = 0; i <= stars; i++) {
        z["star" + i] = document.createElement("div");
        z["star" + i].className = "star";
        document.querySelector('.sky2').appendChild(z["star" + i]);
    }

    //Animación de Estrellas

    var s = document.querySelectorAll('.star');

    for (i = 0; i <= stars; i++) {
        s[i].style.animationDelay = (Math.random(1) * 2) + "s";
        s[i].style.top = (Math.random(1) * 99) + "%";
        s[i].style.left = (Math.random(1) * 99) + "%";
    }

    //Animación de Estrellas Fugaces

    var st = document.querySelectorAll('.s_star');

    for (i = 0; i < st.length; i++) {
        st[i].style.animationDelay = (Math.random(1) * 10) + "s";
        st[i].style.top = Math.random(1) * 100 + "%";
        st[i].style.left = Math.random(1) * 100 + "%";
    }
}