/**
 * Modèle JS
 * @author  Ubaldo Retti
 * @version 0.1
 * @since   2019-08-19
 */

// http://www.jslint.com/help.html
/*jslint this:true */
/*jslint es6, browser, devel, for, single, multivar*/
/*global window, document, alert, performance */

(function main() {
    "use strict"; // Demande un interprétation stricte du code

    let degre = prompt("Tempéreature en Celcius : ");
degre = parseFloat(degre);
    let fahrenheit = degre * 10 / 5 + 32;

    alert(`${degre}°C = ${fahrenheit}°F`);

}()); // Main IIFE

