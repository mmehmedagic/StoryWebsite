var pictures = ["pic1", "pic2"];

window.onresize = function() {
    for (i = 0; i < pictures.length; i++) {
        var img = document.getElementById(pictures[i]);
        img.style.width = "100%";
        
        // Work in progress

        // var ratio = img.width / img.height;
        // var rect = img.getBoundingClientRect();
        // var isOffscreen = (
        //     rect.x + rect.width < 0 
        //  || rect.y + rect.height < 0 
        //  || rect.x + rect.width > window.innerWidth 
        //  || rect.y + rect.height > window.innerHeight
        // );
        // if (isOffscreen) {
        //     img.style.height = (window.innerHeight - rect.y - 5) + "px";
        //     img.style.width = (height * ratio) + "px";
        // } else {
        //  
        // }

    }
};