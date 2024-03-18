const testBox=document.querySelector(".test-box")
const html=document.querySelector("html")
window.addEventListener("click", (evt)=>testbox(evt))
function testbox(evt){
    if(evt.target==html){
        console.log("dlksjfdskljffd")
        testBox.style.display="block"
        testBox.style.width="500px"
        testBox.style.height="300px"
        testBox.style.background="black"
        testBox.style.position="fixed"
        testBox.style.transition="all .5s ease-out"
    }
}
window.addEventListener("click", (evt) =>clicked(evt))
function clicked(evt){
    console.log(evt.target)
}