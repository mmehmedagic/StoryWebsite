window.onresize = function() {
    var img = document.getElementById("pic1");
    var ratio = img.width / img.height;
    var rect = img.getBoundingClientRect();
    var isOffscreen = (
      rect.x + rect.width < 0 
   || rect.y + rect.height < 0 
   || rect.x + rect.width > window.innerWidth 
   || rect.y + rect.height > window.innerHeight
    );
    document.getElementById("test").innerHTML = isOffscreen;
    if (isOffscreen) {
      var height = (window.innerHeight - rect.y - 5) + "px";
      var width = (height * ratio) + "px";
      img.style.height = height;
      img.style.width = width;
    } else {
      img.style.width = "100%";
    }
  };