const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Add your own contact details before publishing.
// Use international format for WhatsApp: country code + number, digits only.
const CONTACT_EMAIL = "erickmburu145@gmail.com";
const WHATSAPP_NUMBER = "2547XXXXXXXX";

document.querySelectorAll(".quote-link").forEach((link) => {
  link.addEventListener("click", () => {
    const message = document.getElementById("message");
    message.value = "Hello, I would like to request a quote for: " + link.dataset.service + ".";
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("senderName").value.trim();
  const email = document.getElementById("senderEmail").value.trim();
  const message = document.getElementById("message").value.trim();
  const note = document.getElementById("formNote");

  const subject = encodeURIComponent("Website enquiry from " + name);
  const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

document.getElementById("whatsappButton").addEventListener("click", () => {
  const note = document.getElementById("whatsappNote");
  if (WHATSAPP_NUMBER === "2547XXXXXXXX") {
    note.textContent = "To activate WhatsApp, replace 2547XXXXXXXX in script.js with your WhatsApp number in international format. Do not include the + sign or spaces.";
    return;
  }
  const text = encodeURIComponent("Hello Erick Digital Web Service, I would like to enquire about your services.");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
});
