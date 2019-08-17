
function addBookmarkPrefix(bookmark) {

    var bookmarkPrefix = "";
    if (bookmark.children[0] != null) {

        for (var i = 0; i < bookmark.children.length; i++) {

            if (bookmark.children.length >= 10 && i < 9)
                bookmarkPrefix = "0" + (i + 1) + ".";
            else
                bookmarkPrefix = (i + 1) + ".";

            bookmark.children[i].name = bookmarkPrefix.concat(" ", bookmark.children[i].name);

            if (bookmark.children[i].children[0] != null) {

                for (var j = 0; j < bookmark.children[i].children.length; j++) {
                    if (bookmark.children[i].children.length >= 10 && j < 9)
                        bookmarkPrefix = (i + 1) + ".0" + (j + 1) + ".";
                    else
                        bookmarkPrefix = (i + 1) + "." + (j + 1) + ".";
                    bookmark.children[i].children[j].name = bookmarkPrefix.concat(" ", bookmark.children[i].children[j].name);

                }

            }

        }
    }
}
addBookmarkPrefix(bookmarkRoot.children[0]);