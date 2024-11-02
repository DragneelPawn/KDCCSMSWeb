let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].classList.remove("fade");
    }
    slides[slideIndex].style.display = "block";  
    slides[slideIndex].classList.add("fade");
}

setInterval(() => {
    changeSlide(1);
}, 5000);


document.getElementById("nextbutton").addEventListener("click", function() {
const firstFormContainer = document.getElementById("firstformcontainer");
const secondFormContainer = document.getElementById("secondformcontainer");
firstFormContainer.style.display = "none";
secondFormContainer.style.display = "block";
});
document.getElementById("backbutton").addEventListener("click", function(){
const firstFormContainer = document.getElementById("firstformcontainer");
const secondFormContainer = document.getElementById("secondformcontainer");

secondFormContainer.style.display = "none";
firstFormContainer.style.display = "block";
});
document.getElementById("submit").addEventListener("click", function(){
    const confirmation = confirm("Are the information you provided correct?");
    
  
    if (confirmation) { // Only proceed if the user confirms
      
  
      // Check if the form is valid
      
    }
     
  });


  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, push, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBSPaq6d_jnv_r70FGLDn3dE8aHS8tl7Xc",
  authDomain: "kdcsmsdev.firebaseapp.com",
  databaseURL: "https://kdcsmsdev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kdcsmsdev",
  storageBucket: "kdcsmsdev.appspot.com",
  messagingSenderId: "531913398632",
  appId: "1:531913398632:web:9970e3295e565e69959edd"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Get form data
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const middlename = document.getElementById('middlename').value;
    const gender = document.getElementById('genderselect').value;
    const age = document.getElementById('agenumber').value;
    const birthdate = document.getElementById('birthdate').value;
    const address = document.getElementById('address').value;
    const parentname = document.getElementById('parentname').value;
    const contactnumber = document.getElementById('contactnumber').value;
    const location = document.getElementById('kasiglahanselect').value;
    const timestamp = serverTimestamp();
    
  

  try{
  // Upload each file and get download URLs
  const photoContainer = document.getElementById("photocontainer");
      const secondFormContainer = document.getElementById("secondformcontainer");
      const successfulContainer = document.getElementById("successful");
  if (document.getElementById("filloutcontainer").checkValidity()) {
    photoContainer.style.display = "none";
    secondFormContainer.style.display = "none";
    successfulContainer.style.display = "block";

    // Store data in Firebase Realtime Database
    const newEnrollmentRef = push(ref(database, 'studentrecords'));
    set(newEnrollmentRef, {
      firstname: firstname,
      lastname: lastname,
      middlename: middlename,
      gender: gender,
      age: age,
      birthdate: birthdate,
      address: address,
      parentname: parentname,
      contactnumber: contactnumber,
      location: location,
      timestamp: timestamp

    }).then(() => {
    }).catch((error) => {
      console.error('Error saving data:', error);
      
    });

    setTimeout(() => {
      window.location.href = "index.html";  // Redirect to dashboard
  }, 8000);
    
} else {
    // Handle invalid form (e.g., display error messages)
    alert("Please fill in all required fields correctly.");
    
  }
} catch (error) {
    console.error('Error uploading files or saving data:', error);
    // Handle the error appropriately (e.g., display an error message to the user)
  }


  });
  