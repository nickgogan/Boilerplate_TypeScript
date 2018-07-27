function GetAllBooks() {
    var books = [
        {
            author: 'Joyce',
            available: true,
            title: 'Ulysses',
        },
        {
            author: 'Hemmingway',
            available: false,
            title: 'A Farewell to Arms',
        },
        {
            author: 'Angelou',
            available: true,
            title: 'I Know Why the Caged Bird Sings',
        },
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var availableBook;
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        if (book.available) {
            availableBook = book.title;
            console.log("First available book: " + availableBook);
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
}
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzpcXEIuVHJhaW5pbmdcXEFuZ3VsYXJcXFR5cGVTY3JpcHRcXGFwcC50cyIsInNvdXJjZXMiOlsiQzpcXEIuVHJhaW5pbmdcXEFuZ3VsYXJcXFR5cGVTY3JpcHRcXGFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtJQUNFLElBQU0sS0FBSyxHQUFHO1FBQ1o7WUFDRSxNQUFNLEVBQUUsT0FBTztZQUNmLFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFFLFNBQVM7U0FDakI7UUFDRDtZQUNFLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLEtBQUssRUFBRSxvQkFBb0I7U0FDNUI7UUFDRDtZQUNFLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsS0FBSyxFQUFFLGlDQUFpQztTQUN6QztLQUNGLENBQUM7SUFFRixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCwyQkFBMkIsS0FBYztJQUN2QyxJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ25DLElBQUksYUFBcUIsQ0FBQztJQUUxQixLQUFtQixVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxFQUFFO1FBQXJCLElBQU0sSUFBSSxjQUFBO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQXlCLGFBQWUsQ0FBQyxDQUFDO1lBQ3RELE1BQU07U0FDUDtLQUNGO0lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsYUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELElBQU0sUUFBUSxHQUFHLFdBQVcsRUFBRSxDQUFDO0FBQy9CLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIElCb29rIHtcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIGF2YWlsYWJsZTogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gR2V0QWxsQm9va3MoKTogSUJvb2tbXSB7XG4gIGNvbnN0IGJvb2tzID0gW1xuICAgIHtcbiAgICAgIGF1dGhvcjogJ0pveWNlJyxcbiAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIHRpdGxlOiAnVWx5c3NlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdXRob3I6ICdIZW1taW5nd2F5JyxcbiAgICAgIGF2YWlsYWJsZTogZmFsc2UsXG4gICAgICB0aXRsZTogJ0EgRmFyZXdlbGwgdG8gQXJtcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdXRob3I6ICdBbmdlbG91JyxcbiAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgIHRpdGxlOiAnSSBLbm93IFdoeSB0aGUgQ2FnZWQgQmlyZCBTaW5ncycsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gYm9va3M7XG59XG5cbmZ1bmN0aW9uIExvZ0ZpcnN0QXZhaWxhYmxlKGJvb2tzOiBJQm9va1tdKTogdm9pZCB7XG4gIGNvbnN0IG51bWJlck9mQm9va3MgPSBib29rcy5sZW5ndGg7XG4gIGxldCBhdmFpbGFibGVCb29rOiBzdHJpbmc7XG5cbiAgZm9yIChjb25zdCBib29rIG9mIGJvb2tzKSB7XG4gICAgaWYgKGJvb2suYXZhaWxhYmxlKSB7XG4gICAgICBhdmFpbGFibGVCb29rID0gYm9vay50aXRsZTtcbiAgICAgIGNvbnNvbGUubG9nKGBGaXJzdCBhdmFpbGFibGUgYm9vazogJHthdmFpbGFibGVCb29rfWApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coYFRvdGFsIEJvb2tzOiAke251bWJlck9mQm9va3N9YCk7XG59XG5cbmNvbnN0IGFsbEJvb2tzID0gR2V0QWxsQm9va3MoKTtcbkxvZ0ZpcnN0QXZhaWxhYmxlKGFsbEJvb2tzKTtcbiJdfQ==