/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const person = new Object();
    person.lastName = "Van Tittelboom";
    person.firstName = "Yordi";
    person.age = 24;
    person.city = "Kerksken";
    person.country = "Belgium";

    document.getElementById('run').addEventListener("click", function (){
        console.log(person)
    })

})();
