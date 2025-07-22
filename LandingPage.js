function joinWaitlist() {
  const input = document.getElementById('phoneInput').value.trim();
  const messageBox = document.getElementById('message');
  const phoneRegex = /^\+\d+$/;

  if (!input) {
    messageBox.textContent = "Please enter your phone number!";
    messageBox.style.color = "red";
  } else if (!phoneRegex.test(input)) {
    messageBox.textContent = "Phone number must start with '+' followed by digits only (no spaces).";
    messageBox.style.color = "red";
  } else {
    messageBox.textContent = "Thank you for joining! We will notify you when we launch. You’ll also be added to our WhatsApp Community for updates!";
    messageBox.style.color = "#4E7837";

    fetch('https://formspree.io/f/mqalpkwp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: input })
    }).catch(err => console.error('Formspree Error:', err));
  }
}
