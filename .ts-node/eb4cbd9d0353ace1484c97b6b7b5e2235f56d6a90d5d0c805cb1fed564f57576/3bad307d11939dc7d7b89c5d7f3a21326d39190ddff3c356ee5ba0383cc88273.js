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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzpcXEEuUGVyc29uYWxcXFByb2plY3RzXFxCb2lsZXJwbGF0ZV9UeXBlU2NyaXB0XFxhcHAudHMiLCJzb3VyY2VzIjpbIkM6XFxBLlBlcnNvbmFsXFxQcm9qZWN0c1xcQm9pbGVycGxhdGVfVHlwZVNjcmlwdFxcYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0lBQ0UsSUFBTSxLQUFLLEdBQUc7UUFDWjtZQUNFLE1BQU0sRUFBRSxPQUFPO1lBQ2YsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsU0FBUztTQUNqQjtRQUNEO1lBQ0UsTUFBTSxFQUFFLFlBQVk7WUFDcEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLG9CQUFvQjtTQUM1QjtRQUNEO1lBQ0UsTUFBTSxFQUFFLFNBQVM7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsaUNBQWlDO1NBQ3pDO0tBQ0YsQ0FBQztJQUVGLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVELDJCQUEyQixLQUFjO0lBQ3ZDLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDbkMsSUFBSSxhQUFxQixDQUFDO0lBRTFCLEtBQW1CLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7UUFBckIsSUFBTSxJQUFJLGNBQUE7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBeUIsYUFBZSxDQUFDLENBQUM7WUFDdEQsTUFBTTtTQUNQO0tBQ0Y7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixhQUFlLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsSUFBTSxRQUFRLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDL0IsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgSUJvb2sge1xuICBhdXRob3I6IHN0cmluZztcbiAgYXZhaWxhYmxlOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBHZXRBbGxCb29rcygpOiBJQm9va1tdIHtcbiAgY29uc3QgYm9va3MgPSBbXG4gICAge1xuICAgICAgYXV0aG9yOiAnSm95Y2UnLFxuICAgICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgdGl0bGU6ICdVbHlzc2VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF1dGhvcjogJ0hlbW1pbmd3YXknLFxuICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcbiAgICAgIHRpdGxlOiAnQSBGYXJld2VsbCB0byBBcm1zJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF1dGhvcjogJ0FuZ2Vsb3UnLFxuICAgICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgdGl0bGU6ICdJIEtub3cgV2h5IHRoZSBDYWdlZCBCaXJkIFNpbmdzJyxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiBib29rcztcbn1cblxuZnVuY3Rpb24gTG9nRmlyc3RBdmFpbGFibGUoYm9va3M6IElCb29rW10pOiB2b2lkIHtcbiAgY29uc3QgbnVtYmVyT2ZCb29rcyA9IGJvb2tzLmxlbmd0aDtcbiAgbGV0IGF2YWlsYWJsZUJvb2s6IHN0cmluZztcblxuICBmb3IgKGNvbnN0IGJvb2sgb2YgYm9va3MpIHtcbiAgICBpZiAoYm9vay5hdmFpbGFibGUpIHtcbiAgICAgIGF2YWlsYWJsZUJvb2sgPSBib29rLnRpdGxlO1xuICAgICAgY29uc29sZS5sb2coYEZpcnN0IGF2YWlsYWJsZSBib29rOiAke2F2YWlsYWJsZUJvb2t9YCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhgVG90YWwgQm9va3M6ICR7bnVtYmVyT2ZCb29rc31gKTtcbn1cblxuY29uc3QgYWxsQm9va3MgPSBHZXRBbGxCb29rcygpO1xuTG9nRmlyc3RBdmFpbGFibGUoYWxsQm9va3MpO1xuIl19