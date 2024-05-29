const toggle = document.querySelectorAll(".faq-toggle");

toggle.forEach(function(toggle) {
    toggle.addEventListener("click", function (){
        toggle.parentNode.classList.toggle("active");
    })
})