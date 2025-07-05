document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const phoneNumber = '2347078747186'; // Replace with your actual WhatsApp number
  const message = encodeURIComponent(document.getElementById('message').value);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, '_blank');
});
