console.log("JS LOADED SUCCESSFULLY");
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const btn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let formData = new FormData(this);

        // 🔄 LOADING STATE
        btn.disabled = true;
        btnText.innerHTML = 'Sending... <span class="loader"></span>';

        fetch("sendmail.php", {
            method: "POST",
            body: formData
        })
        .then(res => res.text())
        .then(text => {

            console.log("RAW RESPONSE FROM PHP:", text); // 🔥 DEBUG
            try {
                let data = JSON.parse(text);

                showPopup(data.message, data.status);

                if (data.status === "success") {
                    form.reset();
                }

            } catch (e) {
                console.log("JSON PARSE ERROR:", e);
                console.log("INVALID RESPONSE:", text);

                showPopup("Server error ❌ (invalid response)", "error");
            }

            resetButton();
        })
        .catch(err => {
            console.log("FETCH ERROR:", err);

            showPopup("Something went wrong ❌", "error");
            resetButton();
        });
    });

    function resetButton() {
        btn.disabled = false;
        btnText.innerHTML = "SEND MESSAGE";
    }

});

// 🌟 POPUP FUNCTION
function showPopup(message, type) {
    let popup = document.getElementById("popup");

    if (!popup) {
        console.log("Popup div not found!");
        return;
    }

    popup.innerHTML = message;
    popup.style.display = "block";
    popup.style.background = (type === "success") ? "green" : "red";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
}