
function showTable(){
                var id=document.getElementById("id").value;
                var titulo=document.getElementById("titulo").value;
                var paginas= document.getElementById("paginas").value;
                var autor=parseInt(document.getElementById("autor").value);
                aux++;
                id.push(id);
                if(aux<=1){
                 tabDate=loadTable();
                }
                var body=document.createElement("tbody");
                var row=document.createElement("tr");
                var col=document.createElement("td");
                col.appendChild(document.createTextNode(id));
                col.style.backgroundColor="#88D32A";
                row.appendChild(col);
                col=document.createElement("td");
                col.appendChild(document.createTextNode(titulo));
                col.style.backgroundColor="#88D32A";
                row.appendChild(col);
                col=document.createElement("td");
                col.appendChild(document.createTextNode(paginas));
                col.style.backgroundColor="#88D32A";
                row.appendChild(col);
                col=document.createElement("td");
                col.appendChild(document.createTextNode(autor));
                col.style.backgroundColor="#88D32A";
                row.appendChild(col);
                col=document.createElement("td");
                body.appendChild(row);
                tabDate.appendChild(body);
                document.getElementById("table-container").appendChild(tabDate);
            
 
              
}

function loadTable(){
 var tab=document.createElement("table");
    tab.setAttribute("style","border:1px solid");
    var head=document.createElement("thead");
    var row=document.createElement("tr");
    var col=document.createElement("th");
    col.setAttribute("colspan","6");
    col.appendChild(document.createTextNode("Datos del libro"));
    col.style.backgroundColor="#66ff33" ;
    row.appendChild(col);
    head.appendChild(row);
    tab.appendChild(head);
    row=document.createElement("tr");
    col=document.createElement("th");
    col.appendChild(document.createTextNode("id"));
    col.style.backgroundColor="#47A149";
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("Titulo"));
    col.style.backgroundColor="#47A149";
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("paginas"));
    col.style.backgroundColor="#47A149";
    row.appendChild(col);
    col=document.createElement("th");
    col.appendChild(document.createTextNode("autor"));
    col.style.backgroundColor="#47A149";
    row.appendChild(col);
    head.appendChild(row);
    tab.appendChild(head);
    return tab;
}
function cargar(){
      
    const code=document.getElementById("code").value;
    const name=document.getElementById("name").value;
    const pagina=document.getElementById("pagina").value;
    const autor=document.getElementById("autor").value;
    var stdents = document.getElementById("nombres");
    var xhr=new XMLHttpRequest();
    xhr.open("POST","Controll?option=0",true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&& xhr.status==200){
            const resp = JSON.parse(xhr.responseText);
              for (var sto of resp){
                 var opt = document.createElement("option");
                opt.setAttribute("value",sto.code);
                opt.appendChild(document.createTextNode(sto.name));
                stdents.appendChild(opt);
        }
        }
    };
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    const dates=`code=${code}&name=${name}&pagina=${pagina}&autor=${autor}`;
    alert(dates);
    xhr.send(dates);
}
function sendDates(){
    const code=document.getElementById("code").value;
    const name=document.getElementById("name").value;
    const pagina=document.getElementById("pagina").value;
    const autor=document.getElementById("autor").value;
    var stdents = document.getElementById("nombres");
    var xhr=new XMLHttpRequest();
    xhr.open("POST","Controll?option=1",true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&& xhr.status==200){
            const resp = JSON.parse(xhr.responseText);
              for (var sto of resp){
                 var opt = document.createElement("option");
                opt.setAttribute("value",sto.code);
                opt.appendChild(document.createTextNode(sto.name));
                stdents.appendChild(opt);
        }
        }
    };
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    const dates=`code=${code}&name=${name}&pagina=${pagina}&autor=${autor}`;
    alert(dates);
    xhr.send(dates);
}
function Buscare(){
    const cod=document.getElementById("cod").value;
    var data = document.getElementById("data");
    var xhr=new XMLHttpRequest();
    xhr.open("POST","Controll?option=1",true);
    xhr.onreadystatechange=function(){
       if(xhr.readyState==4&& xhr.status==200){
       const resp = xhr.responseText;
       document.getElementById("data").innerHTML = resp;
        }
    };
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    const dates=`cod=${cod}`;
    alert(dates);
    xhr.send(dates);
}
function Delete(){
    const codd=document.getElementById("codd").value;
    var xhr=new XMLHttpRequest();
    xhr.open("POST","Controll?option=3",true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&& xhr.status==200){
       const resp = xhr.responseText;
       alert(resp);
        }
    };
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    const dates=`codd=${codd}`;
    alert(dates);
    xhr.send(dates);
}
