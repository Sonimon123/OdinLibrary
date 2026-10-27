function Book(title, authour, pages, read) {
    if (!new.target) {
        throw Error("Must use 'new' when calling constructor")
    }
    this.title = title;
    this.authour = authour;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (read) {
            return title + " by " + authour + ", " + pages + " pages, read"
        }
        else {
            return title + " by " + authour + ", " + pages + " pages, not read yet"
        }
    }
}