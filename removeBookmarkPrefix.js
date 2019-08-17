function removeBookmarkPrefix(bookmark) {

    // Resursive function to remove bookmark prefix

    // Rename bookmark without prefix

    //bookmark.name = bookmark.name.replace(/^\S+\s+/, "");
    bookmark.name = bookmark.name.replace(/^\d\S*\s+/, "");


    if (bookmark.children != null) {

        for (var i = 0; i < bookmark.children.length; i++) {

            removeBookmarkPrefix(bookmark.children[i]);
        }
    }
}

// Remove all bookmark prefixes, recursively

removeBookmarkPrefix(bookmarkRoot);

// THIS ONE IS NOT MY CODE. ITS FROM : https://forums.adobe.com/thread/303414
