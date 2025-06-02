jQuery(function ($) {

    // Do stuff here

    // function suppressBackButton() {
    //     window.location.hash = "_";
    //     window.onhashchange = function() {
    //         if (window.location.hash !== "_") {
    //             window.location.hash = "_";
    //         }
    //     };
    // }

    // $(document).ready(() => {

    //     // Call this function when the page loads
    //     if (document.body.classList.contains('page-template-page-projects')) {
            
    //         $('.fg-thumb').forEach(thumb => {

    //             thumb.addEventListener('click', () => {
    //                 if (window.location.hash !== "_") {
    //                     suppressBackButton();
    //                 }

    //             });

    //         });

    //     }

    // });    

    $(window).on('popstate', function(event) {
        // Your code to handle the back button click here
        console.log("Back button was pressed!");

        if (document.querySelectorAll('.fg-panel').length && document.body.classList.contains('page-template-page-projects')) {
            console.log("Should close modal");
            // if (document.querySelectorAll('.fg-panel-button-close').length) {
            //     document.querySelector('.fg-panel-button-close').click();
            // }
        }
    });

}); // jQuery End
