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

  console.clear();

const blocks = document.querySelectorAll('.block-animate');

let observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observer.unobserve(entry.target);
		} 
		
		// for testing
		// else {
		// 	entry.target.classList.remove('active');
		// }
	})
}, { threshold: 0.5 });

blocks.forEach(block => {
	observer.observe(block);
});