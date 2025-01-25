buttons = document.querySelectorAll("button")
text = document.getElementsByClassName("cart counter")
buttons.forEach(button =>
{
    button.addEventListener('click' ,() =>{
    
    button.classList.toggle("active");
    text.style.display = "block";



    }
)
});