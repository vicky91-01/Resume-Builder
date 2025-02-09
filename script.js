function display(inp, op, prefix = "") {
    if (inp && op) {
        op.innerText = prefix + inp.value;
    }
}
function addInputListener(inputId, outputId, prefix = "") {
    let inputElement = document.getElementById(inputId);
    let outputElement = document.getElementById(outputId);

    if (inputElement && outputElement) {
        inputElement.addEventListener("input", function () {
            display(inputElement, outputElement, prefix);
        });
    }
}
addInputListener("input-name", "intro-name");
addInputListener("input-profile", "intro-profile");
addInputListener("input-address", "intro-address", "Address: ");
addInputListener("input-phone", "intro-phone", "Phone: +91 ");

document.getElementById("input-email").addEventListener("input", function () {
    let email = this.value;
    let emailPreview = document.getElementById("intro-email");

    if (emailPreview) {
        emailPreview.innerText = "Email: " + email;
        emailPreview.href = "mailto:" + email;
    }
});

document.getElementById("input-linkedin").addEventListener("input", function () {
    let linkedin = this.value;
    let linkedinPreview = document.getElementById("intro-linkedin");

    if (linkedinPreview) {
        linkedinPreview.innerText = "LinkedIn: " + linkedin;
        linkedinPreview.href = linkedin.startsWith("http") ? linkedin : "https://" + linkedin;
    }
});

addInputListener("input-college", "intro-college");
addInputListener("input-college_address", "intro-college_address");
addInputListener("input-course", "intro-course", "Course: ");
addInputListener("input-cgpa", "intro-cgpa", "CGPA: ");
document.getElementById("add-achievement").addEventListener("click", function () {
    let achievementInput = document.querySelector(".input-achievement");
    let achievementsList = document.getElementById("intro-achievements");

    if (achievementInput && achievementsList && achievementInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerHTML = `${achievementInput.value} <button class="delete-btn">X</button>`;
        achievementsList.appendChild(li);

        achievementInput.value = "";
    }
});
document.getElementById("add-skill").addEventListener("click", function () {
    let skillInput = document.querySelector(".input-skill");
    let skillsList = document.getElementById("intro-skill");

    if (skillInput && skillsList && skillInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerHTML = `${skillInput.value} <button class="delete-btn">X</button>`;
        skillsList.appendChild(li);
        skillInput.value = "";
    }
});
document.getElementById("add-project").addEventListener("click", function () {
    let projectName = document.querySelector(".input-project");
    let projectDesc = document.querySelector(".input-project-description");
    let projectContainer = document.getElementById("intro-projects");

    if (projectName.value.trim() !== "" && projectDesc.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${projectName.value}:</strong> ${projectDesc.value}`;
        projectContainer.appendChild(li);
        projectName.value = "";
        projectDesc.value = "";
    }
});
