angular.module('myApp')
.service('BookService', [function(){
  var books = [
  {
    title: 'Rebecca',
    author: 'Dafney D.'
  },
  {
    title: 'Gone with the Wind',
    author: 'Marget Mitchell'
  },
  {
    title: 'Dark Tower',
    author: 'Stephen King'
  }

  ];
  return {
    books: books,
    getBooks: function(){ return books; },
    getBook: function(index){ return books[index];},
    addBook: function(book) {
      var newBook = { title: book.title, author: book.author };
      books.push(newBook); }
    };
  }]);