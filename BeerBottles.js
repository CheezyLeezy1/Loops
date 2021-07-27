function beer() {
 
    var bottles;
    var number;
    for(number=99; number>=1; number=number-1){
    
        if (number==1){
        bottles='bottle';
        }
        else{
            bottles='bottles';
        }
     
        document.getElementById("main").innerHTML+=(number+" "+bottles+" of beer on the wall. <br>");
        if(number<99){
        document.getElementById("main").innerHTML+=(number+" "+bottles+" of beer on the wall. <br>");
        }

        document.getElementById("main").innerHTML+=(" take one down <br>");
        document.getElementById("main").innerHTML+=(" pass it around <br>");
        if (number==1){
        document.getElementById("main").innerHTML+=(" no more bottles of beer on the wall! <br>");
        }
    }
}