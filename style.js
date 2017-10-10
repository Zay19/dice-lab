document.addEventListener("DOMContentLoaded", function() {
    var dieGenerate= document.createElement("button");
        dieGenerate.innerText = 'Generate Die';
        dieGenerate.className = 'dieGen';
        document.body.appendChild(dieGenerate);
    var dieNumb = document.createElement("button");
        dieNumb.innerText = 'Roll Dice';
        dieNumb.className = 'dieNumb';
        document.body.appendChild(dieNumb);
    var dieSum = document.createElement("button");
         dieSum.innerText = 'Total value';
        dieSum.className = 'dieSum';
        document.body.appendChild(dieSum);
 
    
 
    var Die = function (){
this.roll = function(){
    var result = Math.floor(Math.random()*6+1);
    this.value = result
    };
}; 
 




   dieGenerate.addEventListener("click", function(){
    var dieDiv = document.createElement("div");
    dieDiv.className = 'dieDiv';
    document.body.appendChild(dieDiv);
    var newDie = new Die;
    newDie.roll();
        dieDiv.innerText = newDie.value;
        $('div').click(function() {
         newDie.roll()
         this.innerText = newDie.value; 
    })
})

    dieNumb.addEventListener("click", function(){
     $('div').each(function(){
     var num = Math.floor(Math.random()*6+1);
     $(this).text(num);
})
    });

    dieSum.addEventListener('click', function(){
        var sumArray = []
        $('div').each(function(){
            sumArray.push(parseInt($(this).text()))
        })
        var sum = 0
        for( var i = 0; i < sumArray.length; i++){;
        sum += sumArray[i];
        }
    alert("Total sum is: " + sum)
    })

   
     Die.prototype.change = function(){
         
     }    

});


/* function Die(){
     this.div = document.createElement('div')
     this.div.className = 'character';

     this.info = getRandom(); */


/*function getRandom(){
        return dieDiv[Math.floor(Math.random()* Die.length)]; */