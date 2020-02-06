let myLibrary = [];

function book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

book.prototype.info = function() {
    var information = this.title + " by " + this.author + ", " + this.pages + ", " + this.isRead;
    return information;
}

function addBookToLibrary(title, author, pages, isRead) {
    myLibrary.push(new book(title, author, pages, isRead));
}
    
function render(){
    var contents = document.querySelector("#contents");
    console.log(5);
    for(var i = 0; i < myLibrary.length; i++){
        contents.innerHTML += myLibrary[i].info() + "<br>";
    }
}


render();
