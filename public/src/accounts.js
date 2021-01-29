function findAccountById(accounts, id1) {
  return accounts.find(({id}) => id === id1)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    let memberA = accountA.name.last.toLowerCase();
    let memberB = accountB.name.last.toLowerCase();
    return memberA > memberB ? 1 : -1;
  })
}

function numberOfBorrows(account, books) {	
	let total = 0
	books.forEach(book => {
    book.borrows.forEach(borrow => {
      if (borrow.id === account.id)
        total += 1
    })
	})
	return total
	}
	
function getBooksPossessedByAccount(account, books, authors) {
  let borrowed = books.filter((book) => {
    return book.borrows.some((borrow) => {
      return borrow.id === account.id && !borrow.returned;
    });
  });
  let results = [];
  borrowed.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    let copy = { ...book };
    copy.author = author;
    results.push(copy);
  });
  return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
