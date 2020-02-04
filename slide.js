var element= document.getElementById('slidediv');
var array = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.png"];
element.style.backgroundImage = "url(" + array[0] + ")";
var i=0;

function nextfunc() {
    console.log("next click");
    // element.style.backgroundImage = "url('2.jpg')";
    if(i>=0 && i<=(array.length-2)){
        element.style.backgroundImage = "url(" + array[i+1] + ")";
        i=i+1;
    }
    if(i == (array.length-1)){
        element.style.backgroundImage = "url(" + array[0] + ")";
        i=0;
    }

}

function prevfunc() {
    console.log("prev click");
    // element.style.backgroundImage = "url('1.jpg')";

    if(i<=(array.length-1) && i>0){
        element.style.backgroundImage = "url(" + array[i-1] +")";
        i=i-1;
    }
    else{
        element.style.backgroundImage = "url(" + array[array.length-1]+ ")";
        i=(array.length-1);
    }
}
setInterval(nextfunc, 2000);