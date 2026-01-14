function sendEmail(event){
  event.preventDefault(); // Prevent default form submission

  // Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Create mailto link
  let subject = encodeURIComponent("Message from " + name + " | ManasCare");
  let body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  // Open user's email client
  window.location.href = "mailto:manascare.support@gmail.com?subject=" + subject + "&body=" + body;
}
