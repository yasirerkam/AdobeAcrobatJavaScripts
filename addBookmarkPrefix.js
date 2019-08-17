function addBookmarkPrefix(bookmark, prefix) {

    if (bookmark.children != null) {

        var bookmarkPrefix = "";
        for (var i = 0; i < bookmark.children.length; i++) {

            if (bookmark.children.length >= 10 && i < 9)
                bookmarkPrefix = prefix + "0" + (i + 1) + ".";
            else
                bookmarkPrefix = prefix + (i + 1) + ".";

            bookmark.children[i].name = bookmarkPrefix.concat(" ", bookmark.children[i].name);

            if (bookmark.children[i].children != null) {

                addBookmarkPrefix(bookmark.children[i], bookmarkPrefix);
            }

        }
    }
}
addBookmarkPrefix(bookmarkRoot, "");
