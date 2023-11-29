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
  
  function clearTime() {
    if (
      document.getElementById("timeField").value == "What time do you want?"
    ) {
      document.getElementById("timeField").value = "";
    }
  }
  
  function resetTime() {
    if (
      document.getElementById("timeField").value == ""
    ) {
      document.getElementById("timeField").value = "What time do you want?";
    }
  }
  
  function clearComment() {
    if (
      document.getElementById("commentField").value == "Please name the troubles you are having with your code. Add any other comments if needed."
    ) {
      document.getElementById("commentField").value = "";
    }
  }
  
  function resetComment() {
    if (
      document.getElementById("commentField").value == ""
    ) {
      document.getElementById("commentField").value = "Please name the troubles you are having with your code. Add any other comments if needed.";
    }
  }
  
  function clearEmail() {
    if (
      document.getElementById("emailField").value == "Your School Email"
    ) {
      document.getElementById("emailField").value = "";
    }
  }
  
  function resetEmail() {
    if (document.getElementById("emailField").value == ""
    ) {
      document.getElementById("emailField").value = "Your School Email";
    }
  }
  
