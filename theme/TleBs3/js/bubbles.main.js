/**
 * Document initializations
 */
$(document).ready(function () {
    $(".spinner").spinner({
       sections: 8,
       wheelImage: "//cdn.bubblesu.com/images/spinners/characters-wheel.png",
       wheelHeight: "100px",
       wheelWidth: "100px"
   });

   FastClick.attach(document.body);
});
