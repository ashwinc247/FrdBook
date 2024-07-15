var addbutton=document.getElementById("add-btn")
var overlayer=document.getElementById("overlayer")
var floatContainer=document.getElementById("float-container")

var newBox=document.getElementById("new-box-btn")
var container=document.getElementById("container")
var inputTitle=document.getElementById("input-title")
var inputAuthor=document.getElementById("input-author")
var textareaStory=document.getElementById("textarea-story")

var cancelBtn=document.getElementById("cancel-btn")

addbutton.addEventListener("click",function(){

    overlayer.style.display="block";
    floatContainer.style.display="block"
    
})

cancelBtn.addEventListener("click",function(){
    overlayer.style.display="none";
    floatContainer.style.display="none"
})

newBox.addEventListener("click",function(){

    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML= `<h2><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M499-268.33 853.33-622 782-692.67 428.33-339 499-268.33Zm-273.67 61q-92-5.67-138.66-41Q40-283.67 40-349q0-61.67 51.83-100.5 51.84-38.83 144.17-46.83 42.33-3.67 63.17-14.84Q320-522.33 320-542q0-28-29.17-42.67-29.16-14.66-97.16-21.33l5.66-66.67Q293-664 339.83-631.5q46.84 32.5 46.84 89.5 0 48.33-37.84 77.67Q311-435 241.33-429.67q-67.33 5-101 25.17-33.66 20.17-33.66 55.5 0 35 29.66 53.17Q166-277.67 228.67-274l-3.34 66.67ZM518-193 353-358l392.67-392q16-16 36.83-15.67 20.83.34 36.83 15.67l91.34 90.67q16 16 16 37.16 0 21.17-16 37.17L518-193Zm-159 33q-17 4-30-9t-9-30l33-159 165 165-159 33Z"/></svg>${inputTitle.value}</h2>
    <h5>${inputAuthor.value}</h5>
    <p>${textareaStory.value}</p>
    <button class="button" onclick="deleteitem(event)">delete</button>`   

    container.append(div)

    overlayer.style.display="none"
    floatContainer.style.display="none"

})

function deleteitem(event){

        event.target.parentElement.remove()

    }