document.getElementById('interactiveForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    var isValid = true;
    var name = document.getElementById('name').value;
    if(name.trim() === '') {
      document.getElementById('name-error').textContent = 'Name is required.';
      isValid = false;
    } else {
      document.getElementById('name-error').textContent = '';
    }
  
    var email = document.getElementById('email').value;
    if(email.trim() === '' || !email.includes('@')) {
      document.getElementById('email-error').textContent = 'Valid email is required.';
      isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }
  
    var message = document.getElementById('message').value;
    if(message.trim() === '') {
      document.getElementById('message-error').textContent = 'Message is required.';
      isValid = false;
    } else {
      document.getElementById('message-error').textContent = '';
    }
    
    if(isValid) {
      // Process the form data (e.g., send to a server or update UI)
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
    // Optionally, clear the form
    this.reset();
    
    // Inform the user of successful submission
    alert('Form submitted successfully!');
  }
});
  