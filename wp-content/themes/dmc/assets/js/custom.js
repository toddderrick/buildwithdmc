jQuery(function ($) {

    // helper fn
    function waitForElementAndClick(selector) {
        const intervalId = setInterval(() => {
            if ($(selector).length) {
                clearInterval(intervalId);
                $(selector).click();
            }
        }, 100); // Check every 100 milliseconds
    }

    function waitForElementAndAddClass(selector, className) {
        const intervalId = setInterval(() => {
            if ($(selector).length) {
                clearInterval(intervalId);
                $(selector).addClass(className);
            }
        }, 100); // Check every 100 milliseconds
    }

    // project pdp prevent back click on modal returning to plp
    function suppressBackButtonWhenModalActive(modalSelector) {

        const waitForModal = setInterval(() => {
            if ($(modalSelector).length) {
                clearInterval(waitForModal);

                // apply hash to prevent back button
                window.location.hash = "projectview";
                window.onhashchange = function() {
                    // add hash to url and then force url back to same url if changed
                    // preventing the user from going back to projects plp
                    // instead click the modal close but keep them on projects pdp
                    if (window.location.hash !== "projectview") {
                        window.location.hash = "projectview";
                    }

                    // check for don't close class after delay to avoid 
                    // immediate close on first open, also delay enhances ux
                    setTimeout(() => {
                        if (document.querySelectorAll(".dmc-dont-close-modal").length === 0 && document.querySelectorAll(".fg-panel-button-close").length) {
                            waitForElementAndClick(".fg-panel-button-close");
                        }

                        document.querySelectorAll(".fg-panel").length && document.querySelector(".fg-panel").classList.remove("dmc-dont-close-modal");
                    }, 400);

                };
            }

        }, 600); // Check every 600 milliseconds

    }

    
    // init

    // check on projects pdp and then wait for modal and suppress back button clicks
    if (document.body.classList.contains("page-template-page-projects")) {
        suppressBackButtonWhenModalActive(".fg-panel");

        $("body").on("click", ".fg-thumb", () => {
            waitForElementAndAddClass(".fg-panel", "dmc-dont-close-modal");
        });
    }

}); // jQuery End
