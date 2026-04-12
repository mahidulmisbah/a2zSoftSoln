document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const btn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let formData = new FormData(this);

        // 🔄 START LOADING
        btn.disabled = true;
        btnText.innerHTML = 'Sending <span class="loader"></span>';

        fetch("sendmail.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.text())
        .then(text => {

            let data;

            try {
                data = JSON.parse(text);
            } catch (e) {
                showPopup("Server error ❌", "error");
                console.log("Invalid response:", text);

                resetButton();
                return;
            }

            showPopup(data.message, data.status);

            if (data.status === "success") {
                form.reset();
            }

            resetButton();
        })
        .catch(() => {
            showPopup("Something went wrong ❌", "error");
            resetButton();
        });
    });

    // 🔁 RESET BUTTON FUNCTION
    function resetButton() {
        btn.disabled = false;
        btnText.innerHTML = "SEND MESSAGE";
    }

});

function showPopup(message, type) {
    let popup = document.getElementById("popup");

    if (!popup) return;

    popup.innerHTML = message;
    popup.style.display = "block";
    popup.style.background = (type === "success") ? "green" : "red";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000); // ⏱️ popup timer (3 sec)
}