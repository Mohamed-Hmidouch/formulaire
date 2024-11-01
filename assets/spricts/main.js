let input_name = document.getElementById("name");
let last_name = document.getElementById("last_name");
let input_age = document.getElementById("age");

////////////
let input_email = document.getElementById("email");
let input_num = document.getElementById("phone");
let input_job = document.getElementById("job");
let input_departement = document.getElementById("department");
////////////
let input_feedBack = document.getElementById("feedback");
/////////////


function showSection(sectionNumber) {
    document.querySelectorAll('.section1, .section2, .section3').forEach(section => section.classList.add('d-none'));
    document.getElementById('section' + sectionNumber).classList.remove('d-none');
}

function nextSection(sectionNumber) {
    showSection(sectionNumber);
}

function prevSection(sectionNumber) {
    showSection(sectionNumber);
}

// function validateSection1() {
//     return  input_name.value != '' && last_name.value != '' && input_age.value != '';
// }
function validRadios() {
    let radios = document.getElementsByName('gender');
    let ischecked = false;
    for (let radio of radios) {
        if (radio.checked) {
            ischecked = true;
            break;
        }
    }
    if (!ischecked) {
        document.getElementById('RadioError').innerText = "choise a gender";
        document.getElementById('RadioError').classList.add('text-danger');
        document.getElementById('RadioError').classList.remove('text-success');
        return false;
    } else {
        document.getElementById('RadioError').innerText = "checked";
        document.getElementById('RadioError').classList.add('text-success');
        document.getElementById('RadioError').classList.remove('text-danger');
        return true;
    }

}

function validateSection1() {
    let valid = true;

    if (input_name.value === '') {
        document.getElementById('nameError').innerText = "plase complete this input";
        document.getElementById('nameError').classList.add('text-danger');
        document.getElementById('nameError').classList.remove('text-success');
        valid = false;
    } else {
        document.getElementById('nameError').innerText = "complete";
        document.getElementById('nameError').classList.add('text-success');
        document.getElementById('nameError').classList.remove('text-danger');
    }

    if (last_name.value === '') {
        document.getElementById('lastNameError').innerText = "please complete this input";
        document.getElementById('lastNameError').classList.add('text-danger');
        document.getElementById('lastNameError').classList.remove('text-success');
        valid = false;
    } else {
        document.getElementById('lastNameError').innerText = "complete";
        document.getElementById('lastNameError').classList.add('text-success');
        document.getElementById('lastNameError').classList.remove('text-danger');
    }
    if (age.value < 18) {
        document.getElementById('ageError').innerText = "please enter age plus de 18ans";
        document.getElementById('ageError').classList.add('text-danger');
        document.getElementById('ageError').classList.remove('text-success');
        valid = false;
    } else {
        document.getElementById('ageError').innerText = "complete";
        document.getElementById('ageError').classList.add('text-success');
        document.getElementById('ageError').classList.remove('text-danger');
    }
    let radioValid = validRadios();


    return valid && radioValid;
}


function validateSection2() {
    let valid = true;
    if (input_email.value === '') {
        document.getElementById('emailError').innerText = "please complete this input";
        document.getElementById('emailError').classList.add('text-danger');
        document.getElementById('emailError').classList.remove('text-sucess');
        valid = false;
    } else {
        document.getElementById('emailError').innerText = "complete";
        document.getElementById('emailError').classList.add('text-success');
        document.getElementById('emailError').classList.remove('text-danger');
    }
    if (input_num.value === '') {
        document.getElementById('phoneError').innerText = "please complete this input";
        document.getElementById('phoneError').classList.add('text-danger');
        document.getElementById('phoneError').classList.remove('text-sucess');
        valid = false;
    } else {
        document.getElementById('phoneError').innerText = "complete";
        document.getElementById('phoneError').classList.add('text-success');
        document.getElementById('phoneError').classList.remove('text-danger');

    }
    if (input_job.value === '') {
        document.getElementById('jobError').innerText = "please complete this input";
        document.getElementById('jobError').classList.add('text-danger');
        document.getElementById('jobError').classList.remove('text-sucess');
        valid = false;
    } else {
        document.getElementById('jobError').innerText = "complete";
        document.getElementById('jobError').classList.add('text-success');
        document.getElementById('jobError').classList.remove('text-danger');
    }
    if (input_departement.value === '') {
        document.getElementById('departmentError').innerText = "please complete this input";
        document.getElementById('departmentError').classList.add('text-danger');
        document.getElementById('departmentError').classList.remove('text-sucess');
        valid = false;
    } else {
        document.getElementById('departmentError').innerText = "complete";
        document.getElementById('departmentError').classList.add('text-success');
        document.getElementById('departmentError').classList.remove('text-danger');
    }
    return valid;
}


function nextSection(sectionNumber) {

    if (sectionNumber === 2 && !validateSection1()) {

        return;
    }
    else if (sectionNumber === 3 && !validateSection2()) {

        return;
    }
    showSection(sectionNumber);
}


function validateTextarea() {
    

    if (input_feedBack.value === '') {
        document.getElementById('messageError').innerText = "Complete le feedback";
        document.getElementById('messageError').add('text-danger');
        document.getElementById('messageError').remove('text-success');
        return false;
    } else if (input_feedBack.value.length < 10) { 
        document.getElementById('messageError').innerText = "min 10 caractèere";
        document.getElementById('messageError').classList.add('text-danger');
        document.getElementById('messageError').classList.remove('text-success');
        return false;
    } else {
        document.getElementById('messageError').innerText = "Formulaire rempli avec succes";
        document.getElementById('messageError').classList.add('text-success');
        document.getElementById('messageError').classList.remove('text-danger');
    }
}


document.getElementById("multiSectionForm").addEventListener("submit", function submit_fuction(event, formation,isTextareaValid) {
        event.preventDefault();
       isTextareaValid = validateTextarea();
        alert("Submit formulaire avec sucess");

         formation = {
            name: input_name.value,
            last_name: last_name.value,
            age: input_age.value,
            email: input_email.value,
            num: input_num.value,
            job: input_job.value,
            departement: input_departement.value,
            feedback: input_feedBack.value
        };




    localStorage.setItem("formation", JSON.stringify(formation));
    document.getElementById("displayButtonContainer").style.display = "block";

});


function displayData(){
    let formation_get = localStorage.getItem("formation");
    let string_storage = JSON.parse(formation_get);
    console.log(string_storage);
    if (string_storage) {
       
        document.getElementById("displayArea").innerHTML = "";

        for (let key in string_storage) {
            if (string_storage.hasOwnProperty(key)) {
                let p = document.createElement("p");
                p.textContent = `${key}: ${string_storage[key]}`;
                document.getElementById("displayArea").appendChild(p);
            }
        }
    }
}








