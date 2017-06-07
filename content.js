
function shareIMages() {
    if (window.myBookmarklet !== undefined) {
        myBookmarklet();
    } else {
        document.body.appendChild(document.createElement('script')).src = 'https://imagebookmarkshare.herokuapp.com/static/js/bookmarklet.js?r=' + Math.floor(Math.random() * 99999999999999999999);
    }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            shareIMages()
        }
    }
);