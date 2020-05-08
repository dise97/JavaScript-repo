var brojacIgrac=0;
var brojacKompjuter=0;

window.onload=function(){
    document.getElementById("Kamen").onclick = osoba;
    document.getElementById("Papir").onclick = osoba;
    document.getElementById("Makaze").onclick = osoba;
    //Da bi smo povezali dugmad iz html-a i funkcije iz JS, koristili smo .getElementById metodu.
    function osoba(){
        var osobaBira=this.id; //Napravili smo varijablu osobaBira kojom ćemo dati doznanja da smo mi vlasnici objekta.
        document.getElementById("Odabir").innerHTML="Birali ste: "+osobaBira;
        //Dio zadatka gdje osoba bira ponuđenu opciju
        var racunarBira=Math.random();
        //Dio zadatka gdje računar bira ponuđenu opciju
        if (racunarBira<=0.33){
            racunarBira="Papir";
        }
        else if(racunarBira>0.66){
            racunarBira="Kamen";
        }
        else{
            racunarBira="Makaze";
        };
        document.getElementById("Odabir").innerHTML="Računar je birao: "+racunarBira;
    console.log(rezultat(osobaBira, racunarBira));
    //Računar je u "random-u" takođe izabrao jednu od opcija, sada će uslijediti poređenje ljudskog i računarskog izbora kako bi se proglasio pobjednik.
    function rezultat(osoba_bira, racunar_bira){
        if (osoba_bira==racunar_bira){
            console.log("Rezultat je neriješen, pokušajte ponovo!");
            document.getElementById("MyDiv").innerHTML="Rezultat je neriješen, pokušajte ponovo!";
        }
        else if(osoba_bira=="Papir"){
            if(racunar_bira=="Kamen"){
                console.log("Vi ste pobjednik, čestitamo!");
                document.getElementById("MyDiv").innerHTML="Vi ste pobjednik, čestitamo!";
                brojacIgrac++;
                document.querySelector("#player").innerHTML = "Igrac: " + brojacIgrac;

    
                
            }
            else{
                console.log("Računar je pobjednik!");
                document.getElementById("MyDiv").innerHTML="Računar je pobjednik!";
                brojacKompjuter++;
                document.querySelector("#computer").innerHTML = "Kompjuter: " + brojacKompjuter;

    
                
            }
        }
        else if(osoba_bira=="Makaze"){
            if(racunar_bira=="Papir"){
                console.log("Vi ste pobjednik, čestitamo!");
                document.getElementById("MyDiv").innerHTML="Vi ste pobjednik, čestitamo!";
                brojacIgrac++;
                document.querySelector("#player").innerHTML = "Igrac: " + brojacIgrac;

     
                
            }
            else{
                console.log("Računar je pobjednik!");
                document.getElementById("MyDiv3").innerHTML="Računar je pobjednik!";
                brojacKompjuter++;
                document.querySelector("#computer").innerHTML = "Kompjuter: " + brojacKompjuter;

    
    
                
            }
        }
        else if(osoba_bira=="Kamen"){
            if(racunar_bira=="Makaze"){
                console.log("Vi ste pobjednik, čestitamo!");
                document.getElementById("MyDiv").innerHTML="Vi ste pobjednik, čestitamo!";
                brojacIgrac++;
                document.querySelector("#player").innerHTML = "Igrac: " + brojacIgrac;

     
            }
            else{
                console.log("Računar je pobjednik!");
                document.getElementById("MyDiv").innerHTML="Računar je pobjednik!";
                brojacKompjuter++;
                document.querySelector("#computer").innerHTML = "Kompjuter: " + brojacKompjuter;

    
                
            }
        }
    }
   
    }
    }