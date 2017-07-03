var rooms=[ {name:"Predavaonica 1", itemsNumber:50},
            {name:"Predavaonica 2", itemsNumber:50},
            {name:"Predavaonica 3", itemsNumber:50},
            {name:"Predavaonica 4", itemsNumber:50},
            {name:"Predavaonica 5", itemsNumber:50},
            {name:"Predavaonica 6", itemsNumber:50},
            {name:"Portirnica", itemsNumber:50},
            {name:"Referada", itemsNumber:50}];


(function(){
    for(var i in rooms){

        var node_li=document.createElement('li');
        var node_a=document.createElement('a');
        var node_p=document.createElement('p');
        var node_text1=document.createTextNode(rooms[i].name);
        var node_text2=document.createTextNode("Broj predmeta: "+rooms[i].itemsNumber);

        node_a.setAttribute("class","col2");
        node_p.setAttribute("class","num");
        node_li.appendChild(node_a);
        node_a.appendChild(node_text1);
        node_a.appendChild(node_p);
        node_p.appendChild(node_text2);
        document.getElementById("prostorije").appendChild(node_li);

    };


})();
