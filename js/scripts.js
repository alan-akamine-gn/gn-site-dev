/*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Get all of the videos
let videos = document.querySelectorAll('[data-youtube]');

// Progressively enhance them
for (let video of videos) {

	// Get the video ID
	let id = new URL(video.href).searchParams.get('v');

	// Add the ID to the data-youtube attribute
	video.setAttribute('data-youtube', id);

	// Add a role of button
	video.setAttribute('role', 'button');

	// Add a thumbnail
	video.innerHTML =
		`<img class="thumb-youtube" alt="" src="https://img.youtube.com/vi/${id}/sddefault.jpg"><br>
		${video.textContent}`;

}

/**
 * Handle click events on the video thumbnails
 * @param  {Event} event The event object
 */
function clickHandler (event) {

	// Get the video link
	let link = event.target.closest('[data-youtube]');
	if (!link) return;

	// Prevent the URL from redirecting users
	event.preventDefault();

	// Get the video ID
	let id = link.getAttribute('data-youtube');

	// Create the player
	let player = document.createElement('div');
	player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

	// Inject the player into the UI
	link.replaceWith(player);

}

// Detect clicks on the video thumbnails
document.addEventListener('click', clickHandler);