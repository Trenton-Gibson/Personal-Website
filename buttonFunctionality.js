//Trenton Gibson
//Credited:2/27/2024

//These constants allow for multiple tasks which are
//gaining access to the body to disable the main scrollbar,
//receiving inputs from the picture buttons in the My Portfolio section,
//gaining access to the popup content so it can be displayed or exited from,
//and receiving inputs from the popup exit buttons so the user may exit from the popup.
const body=document.querySelector("body")
const financePopup=document.querySelector("#pop-up-personal-finance-manager")
const financeImg=document.querySelector(".financeHoverEffect")
const financeCloseBttn=document.querySelector("#pop-up-finance-close-button")
const personalWebsitePopup=document.querySelector("#pop-up-personal-website")
const personalWebsiteImg=document.querySelector(".personalWebsiteHoverEffect")
const personalWebsiteCloseBttn=document.querySelector("#pop-up-personal-website-close-button")
const carbonesPopup=document.querySelector("#pop-up-carbones-website")
const carbonesImg=document.querySelector(".carbonesHoverEffect")
const carbonesCloseBttn=document.querySelector("#pop-up-carbones-website-close-button")
const popupArray=["#pop-up-personal-finance-manager","#pop-up-personal-website","#pop-up-carbones-website"]

//This function displays the content of the popup that is clicked on.
function openPopup(popup){
    popup=document.querySelector(`${popup}`)
    popup.style.display="block"
    body.style.overflow="hidden"
}

//This function exits the user from the current popup.
function closePopup(popup){
    popup=document.querySelector(`${popup}`)
    popup.style.display="none"
    body.style.overflow="visible"
}

//All of the following event listeners check for a click on the particular
//element and either display a popup or exit from it depending on the
//element clicked.

window.addEventListener("click", function(evt){
    if(evt.target==financePopup){
        closePopup(popupArray[0])
    }
    if(evt.target==personalWebsitePopup){
        closePopup(popupArray[1])
    }
    if(evt.target==carbonesPopup){
        closePopup(popupArray[2])
    }
    if(evt.target==financeImg){
        openPopup(popupArray[0])
    }
    if(evt.target==personalWebsiteImg){
        openPopup(popupArray[1])
    }
    if(evt.target==carbonesImg){
        openPopup(popupArray[2])
    }
    if(evt.target==financeCloseBttn){
        closePopup(popupArray[0])
    }
    if(evt.target==personalWebsiteCloseBttn){
        closePopup(popupArray[1])
    }
    if(evt.target==carbonesCloseBttn){
        closePopup(popupArray[2])
    }
});

//This event listener checks if the contact form was submitted and the website consequently unloaded.
//If it is then the form is cleared of all data previously inputted.
window.onunload=function(){
    document.getElementById("contact-form-id").reset()
}
window.addEventListener("click", (evt) =>clicked(evt))
function clicked(evt){
    console.log(evt.target)
}