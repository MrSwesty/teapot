var inputSelector = document.querySelectorAll("input");

function errorStyles (event) {
    event.classList.add("invalidField");
    event.nextElementSibling.classList.remove("hidden");

}

function validStyles (event) {
    event.classList.add("validField");

}

inputSelector.forEach(function (event) {
    event.addEventListener("blur", function (){
//         console.log(event.value);
        isItEmpty (event);


    })
})

function isItEmpty (event) {
    var value = event.value
    value.length == 0 ? errorStyles(event) : validStyles(event) ;


    switch (event.type) {
        case "name":
        isNaN(event.value) && event.length >5 ? "" : "";
        break;

        case "tel":
        isNaN(event.value) && event.value.length === 11 ? "" : " ";
        break;
     }



}
