 function sorting (a,b){
    
    var newArray=[];
    a.map(function(el){newArray.push(el)});
    b.map(function(el){newArray.push(el)});
    
     for (var i=0;i<newArray.length - 1;i++)
         for(var j=i+1; j < newArray.length; ++j) {
             if(newArray[i]>newArray[j]) {
                 var x = newArray[i];
                 newArray[i] = newArray[j];
                 newArray[j] = x;
             }
         }
    return newArray;
}

var a=[2,4,8,5,9];
var b=[1,6,8,7,6,8];
var c = sorting(a,b);



//c.sort(compareReversed);

alert( c );
