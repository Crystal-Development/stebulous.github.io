document.write('\
<style>\
body {margin:0;}\
\
.topnav {\
  overflow: hidden;\
  background-color: #333;\
    position: fixed;\
  width:100%;\
}\
\
.topnav a {\
  float: left;\
  display: block;\
  color: #f2f2f2;\
  text-align: center;\
  padding: 14px 16px;\
  text-decoration: none;\
  font-size: 17px;\
}\
\
.topnav a:hover {\
  background-color: #ddd;\
  color: black;\
}\
\
.topnav .icon {\
  display: none;\
}\
\
@media screen and (max-width: 600px) {\
  .topnav a:not(:first-child) {display: none;}\
  .topnav a.icon {\
    float: right;\
    display: block;\
  }\
}\
\
@media screen and (max-width: 600px) {\
  .topnav.responsive {position: relative;}\
  .topnav.responsive .icon {\
    position: absolute;\
    right: 0;\
    top: 0;\
  }\
  .topnav.responsive a {\
    float: none;\
    display: block;\
    text-align: left;\
  }\
\
}\
</style>\
<body>\
<font face="Arial">\
<div class="topnav" id="myTopnav">\
  <a href="/index">Home</a>\
  <a href="/shop/index.html">Shop</a>\
  <a href="/contact">Contact</a>\
  <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>\
</div>\
</font>\
\
<script>\
function myFunction() {\
    var x = document.getElementById("myTopnav");\
    if (x.className === "topnav") {\
        x.className += " responsive";\
    } else {\
        x.className = "topnav";\
    }\
}\
</script>\
');