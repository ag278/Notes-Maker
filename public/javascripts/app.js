console.log("dfvv");

let token = localStorage.getItem("tokened");
token=JSON.parse(token);

//whenever the page loads we print all the previous notes stored
showNotes();
//if user add a note add it to local stroage
let addBtn = document.getElementById('addBtn');
//whenever someone entered the add note button the fullowing function triggers
addBtn.addEventListener('click', function (e) {
    //fetching the text from thr addTxt class
    let addText = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    //fetching the past notes stores in the local storage
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        // if there are no notes previously we will creatwe a new array name noresObj
        notesObj = [];
    }
    else {
        // else we will fenotesObj = [];tch the previous made array
        notesObj = JSON.parse(notes);
    }
    // now we add value to that array
    let myObj={
        title: addTitle.value,
        text: addText.value
    }
   // console.log(`Bearer ${token}`);
    axios.post('http://localhost:3000/notes',myObj,{ headers: {"Authorization" : `Bearer ${token}`} })
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
    
    notesObj.push(myObj);
    //or we can simply push without creating a new object as given below    
    // notesObj.push({
    //     title: addTitle.value,
    //     Text: addText.value

    // });
//     var element = {};
// element.title=addTitle.value,
// element.Text=addText.value
//     notesObj.push({element: element});
    // then again change the array into string and push the array in to local storage
    localStorage.setItem("notes", JSON.stringify(notesObj));
    //now aftwr someone has add a notw we will clear the text area
    addText.value = "";
    addTitle.value="";
    // console.log(notesObj);

    showNotes();
})


//the function shownotes is ued to show the previous notes we created
function showNotes() {

    //fetching the previous notes form local storage
    axios.get('http://localhost:3000/notes',{ headers: {"Authorization" : `Bearer ${token}`} })
    .then(function (response) {
        //console.log(response);
        let notex=response.data;
       // console.log(notex);
        let html = "";
        notex.forEach(function (value,index) {
            //let notesObjx = Object.entries(notesObj)
            //for (let [value,index] of notesObjx) {
            html += `
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${value.title}</h5>
                            <p class="card-text"> ${value.text}</p>
                            <button id="${value._id}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`;
            //this.id sends the id of that node which has been clicked
        });
        let notesElm = document.getElementById("notes");
            if (notex.length != 0) {
                notesElm.innerHTML = html;
            }
            else {
                notesElm.innerHTML = `No notes available now`
            }
        
       
    })
    .catch(function (error) {
      console.log(error.response);
    }); 



    /*let notes = localStorage.getItem("notes");
    //console.log(notes );
    if (notes == null) {
        // if there are no notes previously we will creatwe a new array name noresObj
        notesObj = [];
    }
    else {
        // else we will fetch the previous made array
        notesObj = JSON.parse(notes);
    }
    
    //we will create a variale tring html and using for loop we traverse thriugh alll the notes stored in form of array and set them in their own block. using template literal 
    let html = "";
    notesObj.forEach(function (value,index) {
        //let notesObjx = Object.entries(notesObj)
        //for (let [value,index] of notesObjx) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${value.title}</h5>
                        <p class="card-text"> ${value.Text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
        //this.id sends the id of that node which has been clicked
    });
    

    //if there are no previous notes there so we simply print the html string which contain all the notes 
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `No notes available now`
    }

    */

}

//function to delete node
function deleteNote(index) {
    console.log('I am deleting', index);
    //console.log(index);
    axios.put('http://localhost:3000/notes/', { xx:index  } ,{ headers: {"Authorization" : `Bearer ${token}`} })
    .then(function (response) {
        console.log(response); 
    })
    .catch(function (error) {
      console.log(error.response);
    }); 

    showNotes();

}

//we will get the text we are inputting in the search bar
search = document.getElementById('searchTxt');
//this function will call whenever thr user enters omething in the search bar
search.addEventListener("input", function () {
    //getting the text from the search bar
    let inputVal = search.value.toLowerCase();
    // console.log("Input event", inputVal);
    //fetching the classes of the notes we have made
    let noteCards = document.getElementsByClassName("noteCard");
    //traversing thriugh all the nodes and check
    Array.from(noteCards).forEach(function (element) {
        //taking the text of node from their p tag. since there is only one p tag in that div therefore we make [0]
        //console.log(element);
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        //console.log(cardTxt);
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        //console.log(cardTxt);
        //checking whether the text contain any art of the seach bar text
        if (cardTxt.includes(inputVal)||cardTitle.includes(inputVal)) {
            //if yes then show the note
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})