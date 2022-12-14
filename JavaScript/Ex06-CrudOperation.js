//Arrays of Books
const myBooks = [];

//create items
function appendItem(item){
    myBooks.push(item);
}

//Read operations
const getAll = () => myBooks; // Lembda way of creating function

//Remove operations
const deleteItem = (index) => myBooks.splice(index, 1);


//Update Operation
const updateItem = function(index, item){
    myBooks[index] = item;
}

