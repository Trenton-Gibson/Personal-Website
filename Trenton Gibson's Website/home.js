window.addEventListener(
    "resize", getSizes, false);
let headshotTitle= document.querySelector(".headshot-title");
let headshotBelowHeaders= document.querySelector(".headshot-below-headers");
let descriptors = document.querySelector("#descriptors");
let name = document.querySelector("#name");
let myHeadshot = document.querySelector("#myHeadshot");
let topNavbar=document.querySelector("#topNavBar")
const standardResolution=1
let headHeight=window.getComputedStyle(headshotTitle)
let headTitleHeight=String(headHeight.height)
console.log(headTitleHeight)
headTitleHeight=headTitleHeight.slice(0, headTitleHeight.length-2)
console.log(headTitleHeight)
headTitleHeight=parseInt(headTitleHeight)
console.log(headTitleHeight)
function getSizes() {
    let zoom = (((window.outerWidth - 10)
        / window.innerWidth) * 100-2)/100;
    zoom=Number(zoom.toFixed(2))
    if(zoom<=1){
        zoom=Math.abs(standardResolution-zoom)*2+zoom;

    }
    else{
        zoom=Math.abs(standardResolution-zoom)*-1.2+zoom;
    }
    headshotTitle.style.height=`${zoom*headTitleHeight}px`;
    console.log(headHeight.height)
    //headshotBelowHeaders.style.transform=`scale(${zoom},${zoom})`;
    descriptors.style.transform=`scale(${zoom},${zoom})`;
    name.style.transform=`scale(${zoom},${zoom})`;
    myHeadshot.style.transform=`scale(${zoom},${zoom})`;
    topNavbar.style.transform=`scale(${standardResolution},${standardResolution})`;
}