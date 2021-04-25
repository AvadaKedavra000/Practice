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

     addLoadEvent(prepareLinks);
     addLoadEvent(prepareGallery); //调用 


      //函数作用：将占位符图片链接换成要点击的链接  
      //参数whichpic代表着一个元素节点，是一个指向某个图片的<a>元素  
      function showPic(whichpic){
        if(!document.getElementById("placeholder"))   return false;     
        var source = whichpic.getAttribute("href");                      //分解出图片的文件路径
        var placeholder = document.getElementById("placeholder");        //获取占位符图片
        if(placeholder.nodeName != "IMG") return false;                  //确保id为"placeholder"的标签是<img>
        placeholder.setAttribute("src",source);                          //将占位符图片的src属性用source赋值
        if(document.getElementById("description")){
          var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : ""; 
          var description = document.getElementById("description");
          if(description.firstChild.nodeType == 3){                      //确保description元素的第一个子元素是一个文本节点
            description.firstChild.nodeValue = text;
          }
        }
        return true;
      }

      //在新的窗口打开界面
      function popUp(winURL){
        window.open(winURL,"popup","width=480,height=320");
      }
      
      
      //class=="popup"的<a>标签链接被点击时，它将调用popUp()函数
      function prepareLinks() {
        if(!document.getElementsByTagName)  return false;//向后兼容
        var links = document.getElementsByTagName("a");
        for(var i=0; i<links.length; i++){
          if(links[i].getAttribute("class") == "popup"){
            links[i].onclick = function() {
              popUp(this.getAttribute("href"));
              return false;
            }
          }
        }
      }

      //id=="imagegallery"的<li>标签下的<a>链接被点击时，它将调用showPic()函数
      function prepareGallery(){         
          if(!document.getElementsByTagName)  return false;          
          if(!document.getElementById)  return false;              
          if(!document.getElementById("imagegallery"))  return false;
          var gallery = document.getElementById("imagegallery");
          var links = gallery.getElementsByTagName("a");          
          for (var i=0; i<links.length; i++){
            links[i].onclick = function(){
              return !showPic(this);
            }
          }
        
      }
      