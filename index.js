const slideshowElement =  document.querySelectorAll(".slideshow-element");

var size = slideshowElement.length;
var count =1;
setInterval(() => {
    count++;
    let curentElement = document.querySelector(".current");
    curentElement.classList.remove("current");

    if(count > size)
    {
        slideshowElement[0].classList.add("current");
        count=1;
    }
    else
    {
        curentElement.nextElementSibling.classList.add("current");
    }
    
}, 2000);



