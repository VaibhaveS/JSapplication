var ul=document.getElementById('list');
var li;
var addButton=document.getElementById('add');
addButton.addEventListener('click',addItem);
function addItem(){
  var input=document.getElementById('input');
  var item=input.value;
  ul=document.getElementById('list');
  var textnode = document.createTextNode(item);
    if (item===''){
      return false
    }
    else{
        //creating li
        li=document.createElement('li');
        //creating checkbox
        var checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check');
        //label
        var label=document.createElement('label');
        label.setAttribute('for','item')
        //push to html
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        setTimeout(()=>{
            li.className='visual';
        },20);
        //clearing input
        input.value='';
    }
}
var removeButton= document.getElementById('remove');
removeButton.addEventListener('click',removeItem);
function removeItem(){
    console.log('remove button clicked');
    li=ul.children
    for (let index=0;index<li.length;index++){
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}