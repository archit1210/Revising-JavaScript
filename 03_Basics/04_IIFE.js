// IIFE = Immediately Invoked Function Expression

(function one () {
    console.log("DB connected to cluster 1")
})();

(() => {
    console.log("DB connected to cluster 2")
})()