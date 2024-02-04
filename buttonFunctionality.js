//Trenton Gibson
//Credited:2/27/2024

//All these variables allow for multiple tasks which are
//gaining access to the body to disable the main scrollbar,
//receiving inputs from the picture buttons in the My Portfolio section,
//gaining access to the popup content so it can be displayed or exited from,
//and receiving inputs from the popup exit buttons so the user may exit from the popup.
const body=document.querySelector("body")
const financePopup=document.querySelector(".pop-up-personal-finance-manager")
const financeButton=document.querySelector("#finance-button")
const finance_Popup_Close_Button=document.querySelector("#pop-up-finance-close-button")
const personalWebsitePopup=document.querySelector(".pop-up-personal-website")
const personalWebsiteButton=document.querySelector("#personal-website-button")
const personalWebsiteCloseButton=document.querySelector("#pop-up-personal-website-close-button")
const carbonesPopup=document.querySelector(".pop-up-carbones-website")
const carbonesButton=document.querySelector("#carbones-website-button")
const carbonesCloseButton=document.querySelector("#pop-up-carbones-website-close-button")
const popupArray=[".pop-up-personal-finance-manager",".pop-up-personal-website",".pop-up-carbones-website"]

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
financeButton.addEventListener("click", function(){
    openPopup(popupArray[0])
});

personalWebsiteButton.addEventListener("click", function(){
    openPopup(popupArray[1])
});

carbonesButton.addEventListener("click", function(){
    openPopup(popupArray[2])
});

finance_Popup_Close_Button.addEventListener("click", function(){
    closePopup(popupArray[0])
});

personalWebsiteCloseButton.addEventListener("click", function(){
    closePopup(popupArray[1])
});

carbonesCloseButton.addEventListener("click", function(){
    closePopup(popupArray[2])
});

financePopup.addEventListener("click", function(){
    closePopup(popupArray[0])
});

personalWebsitePopup.addEventListener("click", function(){
    closePopup(popupArray[1])
});

carbonesPopup.addEventListener("click", function(){
    closePopup(popupArray[2])
});
