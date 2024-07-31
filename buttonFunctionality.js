//Trenton Gibson
//Credited:2/27/2024

//These constants allow for multiple tasks which are
//gaining access to the body to disable the main scrollbar,
//receiving inputs from the picture buttons in the My Portfolio section,
//gaining access to the popup content so it can be displayed or exited from,
//and receiving inputs from the popup exit buttons so the user may exit from the popup.
const body=document.querySelector("body")
const financePopup=document.querySelector("#pop-up-personal-finance-manager")
const financeImg=document.querySelector("#financeHoverEffect")
const financeCloseBttn=document.querySelector("#pop-up-finance-close-button")
const personalWebsitePopup=document.querySelector("#pop-up-personal-website")
const personalWebsiteImg=document.querySelector("#personalWebsiteHoverEffect")
const personalWebsiteCloseBttn=document.querySelector("#pop-up-personal-website-close-button")
const carbonesPopup=document.querySelector("#pop-up-carbones-website")
const carbonesImg=document.querySelector("#carbonesHoverEffect")
const carbonesCloseBttn=document.querySelector("#pop-up-carbones-website-close-button")
const greyHambrgrBttn=document.querySelector("#grey-hamburger-bttn")
const purpleHambrgrBttn=document.querySelector("#purple-hamburger-bttn")
const dropdownLinks=document.querySelectorAll(".dropdown-links")
const dropdownMenu=document.querySelector(".dropdown-menu")
const homeLink=document.querySelector("#top-navbar-home-link")
const contactBttn=document.querySelector("#contact-button")
const popupArray=["#pop-up-personal-finance-manager","#pop-up-personal-website","#pop-up-carbones-website"]
//This function displays the content of the popup that is clicked on.
function openPopup(popup){
    popup=document.querySelector(`${popup}`)
    popup.style.height="100%"
    body.style.overflow="hidden"
}

//This function exits the user from the current popup.
function closePopup(popup){
    popup=document.querySelector(`${popup}`)
    popup.style.height="0%"
    window.setTimeout(restoreScrollBar, 750)
}
//This function restore the main scrollbar in an aesthetically pleasing way
function restoreScrollBar(){
    body.style.overflow="visible"
}

//All of the following event listeners check for a click on the particular
//element and either display a popup or exit from it depending on the
//element clicked.

window.addEventListener("click", function(evt){
    popupArray.forEach(popup =>{
    })
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
window.addEventListener("click", (evt) =>{
    if (contactBttn==evt.target){
        window.addEventListener("blur", (evt)=>{
            document.getElementById("contact-form-id").reset()
        })
    }
})
window.addEventListener("click",(evt) =>dropdown(evt))
function dropdown(evt){
    if(evt.target==greyHambrgrBttn){
        dropdownMenu.style.width="100%"
        dropdownMenu.style.height="100%"
        dropdownMenu.style.background="black"
        greyHambrgrBttn.style.display="none"
        purpleHambrgrBttn.style.display="flex"
        body.style.overflow="hidden"
        dropdownLinks.forEach( link =>{
            link.style.transition="font-size 1.75s ease-in-out"
            link.style.fontSize="10vw"
        })
    }
    if(evt.target==purpleHambrgrBttn){
        dropdownMenu.style.width="100%"
        dropdownMenu.style.height="0%"
        greyHambrgrBttn.style.display="flex"
        purpleHambrgrBttn.style.display="none"
        body.style.overflow="visible"
        dropdownLinks.forEach( link =>{
            link.style.transition="font-size .5s ease-in-out"
            link.style.fontSize="0vw"
        })
    }
    dropdownLinks.forEach( link =>{
        if(evt.target==link||evt.target==homeLink){
            dropdownMenu.style.width="100%"
            dropdownMenu.style.height="0%"
            greyHambrgrBttn.style.display="flex"
            purpleHambrgrBttn.style.display="none"
            body.style.overflow="visible"
            dropdownLinks.forEach( link =>{
                link.style.transition="font-size .5s ease-in-out"
                link.style.fontSize="0vw"
            })
        }
    })
}

window.addEventListener("click", (evt) =>clicked(evt))
function clicked(evt){
    console.log(evt.target)
}