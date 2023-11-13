//when clicked, value is removed
function clearName() {
    if (
      document.getElementById("nameField").value == "Your Name"
    ) {
      document.getElementById("nameField").value = "";
    }
  }
  
  //once cleared and clicked out of box, value is added back
  function resetName() {
    if (document.getElementById("nameField").value == "") {
      document.getElementById("nameField").value = "Your Name";
    }
  }
  
  function clearPhone() {
    if (
      document.getElementById("phoneField").value == "Your Title"
    ) {
      document.getElementById("phoneField").value = "";
    }
  }
  
  function resetPhone() {
    if (
      document.getElementById("phoneField").value == ""
    ) {
      document.getElementById("phoneField").value = "Your Title";
    }
  }
  
  function clearComment() {
    if (
      document.getElementById("commentField").value == "Your Comment"
    ) {
      document.getElementById("commentField").value = "";
    }
  }
  
  function resetComment() {
    if (
      document.getElementById("commentField").value == ""
    ) {
      document.getElementById("commentField").value = "Your Comment";
    }
  }
  
  function clearEmail() {
    if (
      document.getElementById("emailField").value == "Your Email"
    ) {
      document.getElementById("emailField").value = "";
    }
  }
  
  function resetEmail() {
    if (document.getElementById("emailField").value == "") {
      document.getElementById("emailField").value = "Your Email";
    }
  }
  
  function alertThanks() {
    alert('Thank you for the info');
  }
  //click button, get this message, DONT PRESS IT