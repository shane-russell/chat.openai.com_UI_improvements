// ==UserScript==
// @name         Toggle Element Button
// @namespace    http://your-namespace
// @version      1.0
// @description  Adds a button to toggle the display of an element with a specific CSS selector
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the CSS selector for the target element
    const cssSelector = 'div.dark.flex-shrink-0.overflow-x-hidden.bg-gray-900';

    // Function to toggle the target element's display property
    function toggleElement() {
        const targetElement = document.querySelector(cssSelector);
        if (toggleButton.textContent === '←') {
            toggleButton.textContent = '→';
            targetElement.style.display = 'none';
            toggleButton.style.left = '0.2rem'; // Move the button to the left
            toggleButton.style.width = '2rem'; // Set the width of the button
            toggleButton.style.backgroundColor = '#75AC9D'; // Set the background color
        } else {
            toggleButton.textContent = '←';
            targetElement.style.display = 'block';
            toggleButton.style.left = '11rem'; // Reset the button's position
            toggleButton.style.width = '6rem'; // Reset the button's width
            toggleButton.style.backgroundColor = ''; // Reset the background color
        }
    }

    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'floating-button';
    toggleButton.textContent = '←';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '0.5rem';
    toggleButton.style.left = '11rem';
    toggleButton.style.zIndex = '9999';
    toggleButton.style.borderColor = 'hsla(0, 0%, 100%, .2)';
    toggleButton.style.borderWidth = '1px';
    toggleButton.style.borderRadius = '0.375rem';
    toggleButton.style.boxSizing = 'border-box';
    toggleButton.style.height = '2.85rem';
    toggleButton.style.width = '6rem';
    document.body.appendChild(toggleButton);

    // Add a click event listener to the toggle button
    toggleButton.addEventListener('click', toggleElement);

    // Reattach the toggle functionality when the URL hash changes
    window.onhashchange = function() {
        toggleButton.removeEventListener('click', toggleElement);
        toggleButton.addEventListener('click', toggleElement);
    };
})();
