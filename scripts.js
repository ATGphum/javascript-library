let myLibrary = [];

//object to hold a books details
function book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//add a function to return book details
book.prototype.info = function() {
    var information = this.title + " by " + this.author + ", " + this.pages + " pages, " + this.isRead;
    return information;
}

//adds a book to the library array
function addBookToLibrary(title, author, pages, isRead) {
    var read;
    if(isRead == true){
        read = "Has been read";
    }
    else{
        read = "Not yet read";
    }
    if(title == ""){
        title = "Unknown";
    }
    if(author == ""){
        author = "Unknown";
    }
    if(pages == ""){
        pages = "Unkown";
    }
    myLibrary.push(new book(title, author, pages, read));
}
    
//shows every book detail in the iibrary
function render(){
    var contents = document.querySelector("#contents");
    contents.textContent = "";
    for(var i = 0; i < myLibrary.length; i++){
        contents.innerHTML += myLibrary[i].info() + "<br>";
        contents.innerHTML += "<button class=rm data-key=" + i + ">Remove</button><br>";
        contents.innerHTML += "<button class=toggle data-key=" + i + ">Toggle Read</button><br>"
        
        var rmAll = document.querySelectorAll('.rm');
        rmAll.forEach(rm => rm.addEventListener('click', (i) => removeBook(i)));
        var toggleAll = document.querySelectorAll('.toggle');
        toggleAll.forEach(toggle => toggle.addEventListener('click', (i) => toggleRead(i)));
    }
}

function removeBook(index){
    var rmindex = index.srcElement.dataset.key;
    console.log(rmindex);
    myLibrary.splice(rmindex, 1); 
    render();
}

function toggleRead(index){
    console.log(index);
    rmindex = index.srcElement.dataset.key;
    if(myLibrary[rmindex].isRead == "Has been read"){
        myLibrary[rmindex].isRead = "Not yet read";
    }
    else{
        myLibrary[rmindex].isRead = "Has been read";
    }
    render();
}

var addButton = document.querySelector('#bookadd');
addButton.addEventListener('click', ()=> toggleForm());

var formDisplay = false;

function toggleForm() {
    var contents = document.querySelector("#frm");
    if(formDisplay) {
        formDisplay = false;
        contents.classList.add('remove');
    }
    else{
        formDisplay = true;
        contents.classList.remove('remove');
    }
}
        
    

var form = document.querySelector('#submit');
form.addEventListener('click', () => getData());

//submits form data
function getData(){
    var bname = document.getElementById("bname").value;
    var aname = document.getElementById("aname").value;
    var pages = document.getElementById("pages").value;
    var isRead = document.getElementById("isread").checked; 
    //clear the form
    document.getElementById("bname").value = "";
    document.getElementById("aname").value = "";
    document.getElementById("pages").value = "";
    addBookToLibrary(bname, aname, pages, isRead);
    render();
}


render();
