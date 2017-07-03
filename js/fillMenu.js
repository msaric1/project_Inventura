var actions = new Array();
actions.push({
	 name:"Inventura",
	 image:{
		  name: "1.svg",
		  alt: "Open tab stocktacking"
	 },
	 link:"#inventura"
});
actions.push({
	 name:"Inventar",
	 image:{
		  name: "2.svg",
		  alt: "Open tab inventory"
	 },
	 link: "#inventar"
});
actions.push({
	 name:"Prostorije",
	 image:{
		  name: "3.svg",
		  alt: "Open tab rooms"
	 },
	 link: "#prostorije"
});
actions.push({
	 name:"Zaposlenici",
	 image:{
		  name: "4.svg",
		  alt: "Open tab employees"
	 },
	 link: "#zaposlenici"
});
actions.push({
	 name:"Administracija",
	 image:{
		  name: "5.svg",
		  alt: "Open tab administration"
	 },
	 link: "#administracija"
});

(function fillMenu()
{

	 for(var i in actions)
	 {
		  var node_li  = document.createElement("li");
		  var node_img = document.createElement("img");
		  var node_a   = document.createElement("a");
		  var node_txt = document.createTextNode(actions[i].name);

		  node_img.setAttribute ("src","icons/" + actions[i].image.name);
		  node_img.setAttribute ("alt", actions[i].image.alt);
		  node_img.setAttribute("class","img1");
		  node_a.setAttribute   ("href", actions[i].link);
		  node_a.setAttribute   ("class","col1");
		  node_a.appendChild   (node_img);
		  node_li.appendChild   (node_a);
		  node_a.appendChild    (node_txt);
		  document.getElementById("options").appendChild(node_li);

				
	 }
})();

