window.onload = function() {
    // Is Mobile true or false
    var bMobile = 
        navigator.userAgent.indexOf( "Mobile" ) !== -1 || 
        navigator.userAgent.indexOf( "iPhone" ) !== -1 || 
        navigator.userAgent.indexOf( "Android" ) !== -1 || 
        navigator.userAgent.indexOf( "Windows Phone" ) !== -1;

    // get all the links in the DOM and add an event to display the associated article.
    var menuListItems = document.getElementsByTagName('a');
    for(i=0;i<menuListItems.length;i++) {
        if(menuListItems[i]) {
            menuListItems[i].addEventListener('click', showArticle);
        }
    }

    // enable the target page from URL parameter, otherwise show the home page
	if((window.location.href.indexOf('#')) == -1) {
        document.getElementById('html5').style.display = 'block';
	} else {
    	var locale = window.location.href.substring(window.location.href.indexOf('#')+1)
        document.getElementById(locale).style.display = 'block';
	}

    // Handle display of sidemenu;
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 64) {
            document.getElementById('sideMenu').style.left = '0';
        } else {
            sideMenu.style.left = '-42';
        }
    });
}

function showArticle() {
    hideAllArticles();
    document.getElementById(this.href.substring(this.href.indexOf('#')+1)).style.display = 'block';
	window.scrollTo(0, 0)
}

function hideAllArticles() {
    var contentItems = document.getElementsByTagName('article');
    for(i=0;i<contentItems.length;i++) {
        contentItems[i].style.display = 'none';
    }
}
