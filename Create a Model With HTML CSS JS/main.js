// Get Modal Variable
var modal = document.getElementById('simpleModal');
// Get Open Modal Button
var modalBtn = document.getElementById('modalBtn');
// Get Open Close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen For Open Click
modalBtn.addEventListener('click',openModal);
// Listen For Close Click
closeBtn.addEventListener('click',closeModal);
// Listen For Outside Click
window.addEventListener('click',clickOutside);

// Function To Open Modal
function openModal(){
    modal.style.display = 'block';
} 

// Function To Close Modal
function closeModal(){
    modal.style.display = 'none';
} 

// Function To Close Modal If Outside Click
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
} 