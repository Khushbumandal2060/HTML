/* First collect DOM element to maniputale 
*/

let op1 = document.getElementById('op1'),
    op2 = document.getElementById('op2'),
    add = document.getElementById('add'),
    sub = document.getElementById('sub'),
    mul = document.getElementById('mul'),
    div = document.getElementById('div'),
    res = document.getElementById('res');

    //Now, event and operation with the redered DOM element.
    console.log(op1, op2, add);

    //Event operation 
    //element .addEventListener("event", callback_function())
    add.addEventListener("click", function(){
        let output = eval('${ op1.value} + ${op2.value}');
        res.value = output;
    });  //parseInt() or parseFloat() - older than E6

    sub.addEventListener("click", function(){
        let output = eval('${ op1.value} - ${op2.value}');
        res.value = output;
    });  //parseInt() or parseFloat() - older than E6

    
    

    
