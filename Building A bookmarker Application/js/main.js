// Event Listener for Form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Function for SubmitForm
function saveBookmark(e) {
  // Get form Value
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  // Test if bookmarks is null 
  if (localStorage.getItem('bookmarks') === null) {
    // Init array
    var bookmarks = [];
    // add to array
    bookmarks.push(bookmark);
    // Set to LocalStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmarks to array
    bookmarks.push(bookmark);
    // Reset back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear Form
  document.getElementById('myForm').reset;

  // Re-Fetch bookmarks
  fetchBookmarks();

  e.preventDefault();
}

// Delete bookmark fuction
function deleteBookmark(url) {
  // get Bookmarks from Local Storage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // loop through bookmakrs
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // Removing fro array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-Fetch bookmarks
  fetchBookmarks();
}

// Fetch Bookmark
function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Get Output ID
  var bookmarksResults = document.getElementById('bookmarksResults');
  // Build Output
  bookmarksResults.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += `<div class = "well" >
    <h3>${name}
    <a class = "btn btn-default" target = "_blank" href = ${url} >Visit</a> 
    <a onclick ="deleteBookmark(\'${url}\')" class = "btn btn-danger" href = "#">Delete</a> 
    </h3>
    </div>`;
  }
}

// Validate the Form
function validateForm(siteName, siteUrl) {
  if (!siteUrl || !siteName) {
    alert(' Please Fill Both The Fields');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert('Please use a valid URL');
    return false;
  }
  return true;
}
