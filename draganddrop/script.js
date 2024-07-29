console.log('This is drag anddrop ')

const imgBox =document.querySelector('.imgBox')
const whiteBoxes = document.getElementsByClassName('whiteBox')

// Event listeners for draggable element imgBox                
imgBox.addEventListener('dragstart',(e)=>{
 console.log('DragStart has been triggered')
   e.target.className += ' hold'
setTimeout(() => {
    e.target.className = 'hide'

}, 0);
})

imgBox.addEventListener('dragend',()=>{
    console.log('Dragend has been triggered')
})

let whiteBox;
for (whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
console.log('Dragover has been triggered')
    })

    whiteBox.addEventListener('dragenter',()=>{
 console.log('DragEnter has been triggered')
    })

    whiteBox.addEventListener('dragleave',()=>{
console.log('Drag Leave has been triggered')
    })

    whiteBox.addEventListener('drop',()=>{
console.log('Drag has been triggered')
    })

    
}