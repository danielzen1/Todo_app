 // document.addEventListener('DOMContentLoaded',() =>{})

 // get the the completed items list
 var completeditemslist = document.getElementById('completeditemslist')

 // select all checkboxes that has the type = "checkbox"
 var checkboxes = document.querySelectorAll("input[type=checkbox]")

 // get the todo list section by id
 let _todoList = document.getElementById('todoList');

 // create the todo item shape and give it a class name from bootstrap 
 let _todoitem = document.createElement('label')
 _todoitem.className = "list-group-item"

 // the title of the todo item
 let todoitemtext = document.createElement('text');

 // create a cheack box of todo item and then append it to the todoitem shape
 let _todoitemcheckbox = document.createElement('input')
 _todoitemcheckbox.className = "form-check-input me-1";
 _todoitemcheckbox.type = "checkbox"
 _todoitem.appendChild(_todoitemcheckbox)

 // a function that adds a new item to the to do list
 function add_item() {
     // getting the user input value
     let _userinput = document.getElementById('addinputbar').value;

     // add the user input value to the todoitemtext and then append it to the _todoitem
     todoitemtext.innerHTML = _userinput;
     _todoitem.appendChild(todoitemtext);

     // create a clone of the shape[_todoitem]that we resently made and then add it to the todolist[_todoList]
     _todoList.appendChild(_todoitem.cloneNode(true))

     // select all checkboxes that has the type = "checkbox"
     checkboxes = document.querySelectorAll("input[type=checkbox]")
     checkboxes.forEach(item => {
         item.addEventListener("click", chechbox_event);
     })
 }

 // a function hide every checked item
 function chechbox_event() {

     // select all todoitems
     todoitems = document.querySelectorAll('label[class=list-group-item]')

     // loop through todoitems array
     todoitems.forEach(todoitem => {

         // if [todoitem] has a checked check box add it ti the compeleted tesks list
         if (todoitem.firstChild.checked) {
             // append the compeleted item to the compeleted items list
             completeditemslist = document.getElementById('completeditemslist');
             completeditemslist.appendChild(todoitem);
         }
         // if [todoitem] has a unchecked check box readd to the todo list
         else {
             //  add item to the to do list
             _todoList.appendChild(todoitem);
         }
     });
 }

 // a function that shows the completed tesks 
 function showCompletedTasks() {

     // get show Completed Tasks button
     showCompletedTasksbtn = document.getElementById('showCompletedTasks');

     // if th button is active make it unactive by changeing the class name 
     if (showCompletedTasksbtn.className == "btn active") {
         showCompletedTasksbtn.className = "btn unactive"

         // show the completed items list
         completeditemslist.style.display = "block";

     }
     // if th button is unactive make it active by changeing the class name 
     else {
         showCompletedTasksbtn.className = "btn active"

         // hide the completed items list
         completeditemslist.style.display = "none";
     }
 }