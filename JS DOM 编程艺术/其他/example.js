     //为了让多个函数在网页加载完毕后立刻执行，引入该函数
     function addLoadEvent(func) {
        var oldonload = window.onload;
        if(typeof window.onload != 'function'){
           window.onload = func;
        }
        else{
          window.onload = function(){
            oldonload();
            func();
          }
        }
      }
 
      addLoadEvent(test); //调用 

function test(){
    
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my ");
    var txt3 = document.createTextNode("content.");

    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    para.appendChild(txt1);
    para.appendChild(emphasis);
    para.appendChild(txt2);
    para.appendChild(txt3);
    emphasis.appendChild(txt2);
}
