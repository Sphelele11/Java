
(function(){
  emailjs.init("wJC2EV4sGDqUy4pq-"); // Replace with your real key
})();

function SendMail() {
  const btn = document.querySelector(".submit-btn");
  const originalText = btn.innerHTML;
  btn.innerHTML = "Sending...";
  btn.disabled = true;

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
  };

  emailjs.send("service_xn2dyqt", "template_gkpsxs6", parms)
    .then(() => {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
    })
    .catch(() => {
      alert("Failed. Please WhatsApp: 082 407 6327");
      btn.innerHTML = originalText;
      btn.disabled = false;
    });
}