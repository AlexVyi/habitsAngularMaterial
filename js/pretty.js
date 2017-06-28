/**
 * Created by alexandrupetru on 21/06/2017.
 */
$(document).ready(function () {

    $(".md-fab").click(function () {
        $("#login").addClass("hidden");
        $("#main").removeClass("hidden")

    })
     $("#logout").click(function () {
         $("#login").removeClass("hidden")
     })
})
