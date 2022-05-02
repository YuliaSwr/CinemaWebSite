let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Tickets are booked! \nAll information was send to your email!");
});