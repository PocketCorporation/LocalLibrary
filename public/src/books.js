// since id is the property of the object method, I can change the id parameter to
// different name and destructure the id property itself in the object reference
// to call it without chaining

function findAuthorById(authors, id1) {
  return authors.find(({id}) => id ===id1 )
}

function findBookById(books, id1) {
  return books.find(({id}) => id === id1 )
}

function partitionBooksByBorrowedStatus(books) {	
	function borrowedStatus(book) {
	  return book.borrows.some((borrow) => !borrow.returned);
	}
	let borrowed = books.filter(borrowedStatus);
	let returned = books.filter((book) => {
	  return !book.borrows.some((borrow) => !borrow.returned);
	});
	return [borrowed, returned];
}

// Book only non array parameter in the assignment (except for the id parameter).
// Calling array methods on 
// book will return an 'is not a function error'. Console.log reveals book to be
// an object in the books array in books.js
function getBorrowersForBook(book, accounts) {	
	let list = [];
	book.borrows.forEach((borrow) => {
	  let account = accounts.find((account) => borrow.id === account.id);
	  let copy = { ...account };
	  copy.returned = borrow.returned;
	  list.push(copy);
	});
	return list.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
