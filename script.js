function addField(type) {
    const newField = document.createElement("input");
    newField.type = "text";
    newField.placeholder = `Additional ${type} Details`;
    newField.name = type;

    const button = document.querySelector(`button[onclick="addField('${type}')"]`);
    button.before(newField);
}

function generateResume() {
    document.getElementById("resumeForm").style.display = "none";
    document.getElementById("resumePreview").style.display = "block";
    document.getElementById("Download").style.display = "block";

    document.getElementById("displayName").textContent = document.getElementById("name").value;
    document.getElementById("displayEmail").textContent = document.getElementById("email").value;
    document.getElementById("displayPhone").textContent = document.getElementById("phone").value;
    document.getElementById("displayLinkedIn").textContent = document.getElementById("linkedin").value;
    document.getElementById("displayGitHub").textContent = document.getElementById("github").value;

    const photoInput = document.getElementById("photo");
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("displayPhoto").src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }

    const educationFields = document.getElementsByName("education");
    const educationList = document.getElementById("displayEducation");
    educationList.innerHTML = "";
    educationFields.forEach(field => {
        const listItem = document.createElement("li");
        listItem.textContent = field.value;
        educationList.appendChild(listItem);
    });

    const experienceFields = document.getElementsByName("experience");
    const experienceList = document.getElementById("displayExperience");
    experienceList.innerHTML = "";
    experienceFields.forEach(field => {
        const listItem = document.createElement("li");
        listItem.textContent = field.value;
        experienceList.appendChild(listItem);
    });
}

function DownloadResume() {
    const element = document.getElementById("resumePreview");
    html2pdf().from(element).save('Resume.pdf');
}
