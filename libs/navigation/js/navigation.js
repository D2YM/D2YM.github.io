/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
jQuery(document).ready(function() {
    var btnClose = document.getElementById('btn-close-menu');
    var menuList = document.getElementById('primary-menu');
    menuList.insertBefore(btnClose, menuList.firstChild);
    document.getElementById('closse-toggle').addEventListener("click", closeMenu);
    
    function closeMenu(){
        document.getElementsByClassName('main-navigation').item(0).classList.remove('toggled');
    }
});
(function( $ ) {
    var g = document.getElementsByClassName('menu-item-has-children');
    for(var i=0; i<g.length; i++){
        var f = g.item(i).getElementsByTagName('a').item(0);
        f.insertAdjacentHTML('beforeend','<button class="dropdown-toggle"><span class="svg-fallback icon-angle-down"></span></button>');
    }
    initMainNavigation( $( '.main-navigation' ) );
    
	function initMainNavigation( container ) {
		container.find( 'a .dropdown-toggle' ).click( function( e ) {
			var _this = $( this ),
				screenReaderSpan = _this.find( '.screen-reader-text' );

			e.preventDefault();
			_this.toggleClass( 'toggled-on' );
			
			_this.parent().next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );

			_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );

		});
	}
})( jQuery );

( function() {
	var container, button, menu, links, i, len;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

} )();