// Loops allow us to repeat a code a number of times 
//a big part of good programming is dry - do not repeat yourself 
//loops allows us to get the code to repeat itself 

//For Loops are used generally when we need something to run for set number of times

//While Loops are used generally when we need something to run while a condition is true 

//Examples for FOR loops >>> print out a statement ten times : FOR
//Examples for WHILE loops >>> force user to enter their username until the pick a unique one : WHILE

 // print 0-9 
 // for(i=0; i<10; i=i+1){
 // console.log(i);
 
 //print hi 10x
 //for(i=0; i<10; i=i+1){
 //console.log("Hi!"); 

 //function count(){
     //for(i=0; i<=10; i=i+1){
        //document.getElementById("name").innerHTML="..."; >>> so hear everything in the body of the HTML will be replaced with ... 
        //document.getElementById("name").innerHTML+="i"; >>> add something that is equal to the i
        //document.getElementById("name").innerHTML+="<br />"+i+","; concatenates adds comma - each input is on its own line

        ////for(i=10; i>=0; i=i+1){ >> count from ten upwards >>> infinite loop>> incrementing
        //for(i=10; i>=0; i=i-11){ >> count from ten downwards >>> decrementing 

        //i++ increments >>> i-- decrements >>> more than one? i=i+2 or i=-2
//function print() {
       // for(i=-100; i<=0; i++){
            //document.getElementById("main").innerHTML+="<br />"+i+",";
        //}
   // } >>>>>>> Print all numbers -100 - 0 

    //function print() {
        //for(i=100; i>=0; i--){
            //document.getElementById("main").innerHTML+="<br />"+i+",";
       // }
    // } >>> print all number from 100 - 0

     //function print() {
      //  for(i=-10; i<=10; i=i+2){
       // document.getElementById("main").innerHTML+="<br />"+i+",";
        //}
    //} >>> iteration +2

    //function print() {
    // var input1 = parseInt(document.getElementById("num1").value)
    // var input2 = parseInt(document.getElementById("num2").value)
    // var input3 = parseInt(document.getElementById("num3").value)
    //     var max;
    //     var min; 
       
    //     if(input1>input2){
    //      max=input1;
    //      min=input2;
    //     }
        
    //     else if(input2>input1){
    //     max=input2;
    //     min=input1;
    //     }


    //     for(min; min<=max; min++){
    //     document.getElementById("main").innerHTML+="<br />"+min+",";
    //     }
    // } >>>>>> take in 2 inputs - compare and iterate depending 
   
   
   
    // function print() {
    //     var input1 = parseInt(document.getElementById("num1").value)
    //     var input2 = parseInt(document.getElementById("num2").value)
    //     var input3 = parseInt(document.getElementById("num3").value)

    //     var max;
    //     var min; 
       
    //     if(input1>input2){
    //         max=input1;
    //         min=input2;
    //     }
        
    //     else if(input2>input1){
    //         max=input2;
    //         min=input1;
    //     }

    //     for(min; min<=max; min+=input3){
    //         document.getElementById("main").innerHTML+="<br />"+min+",";
    //     }

    // } >>> Take in 3 numbers from a user and use them to set all 3 parts of the loop and print (Eg 1,10,2 would print from 1-10 in increments of 2) 


    // function sum(){
    //     var total=0;
    //     for(i=0; i<=10; i++){
    //         total=total+i;
    //         document.getElementById("main").innerHTML+="<br />"+total+",";
    //     }

    // }

    // function sum(){
    //     for(i=1; i<=100; i=i+2){
    //         document.getElementById("main").innerHTML+="<br />"+i+",";
    //     }

    // } count odd number to 100

    // function sum(){
    //        for(i=0; i<=100; i=i+2){
    //        document.getElementById("main").innerHTML+="<br />"+i+",";
    //     }
    // } >> even number to 100
    
//     function input() {
//         var input1 = parseInt(document.getElementById("num1").value)
//         var input2 = parseInt(document.getElementById("num2").value)
//         var input3 = parseInt(document.getElementById("num3").value)
//         var input4 = parseInt(document.getElementById("num4").value)
//         var input5 = parseInt(document.getElementById("num5").value)

//         sum=input1+input2+input3+input4+input5;

//         for(i=0; i<sum; i++){
//     }document.getElementById("main").innerHTML+="<br />"+sum+",";
// }

