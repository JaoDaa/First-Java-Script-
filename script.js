
 const testParagraph = document.getElementById('test-id');
function hideElement(){
    if (confirm('Are you sure you want to hide elements?'))
    testParagraph.style.display = 'none'
}

const myButton = document.getElementById('button');

myButton.addEventListener('click', hideElement)

function OpenElement(){
    testParagraph.style.display = 'block'
}
const myButton2 = document.getElementById('button2');

myButton2.addEventListener('click', OpenElement)