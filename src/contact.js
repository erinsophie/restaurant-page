import sharedHeader from "./sharedHeader.js";
import createFooter from "./footer.js";

export default function loadContact() {
  const content = document.getElementById('content');

  const header = sharedHeader;

  const main = document.createElement("div");
  main.classList.add("yellow-background");

  const contactText = document.createElement("div");
  contactText.classList.add("contact-text");
  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact Us";
  const contactPara = document.createElement("p");
  contactPara.textContent = `If you have any questions or comments, please fill out the form below and we will get back to you as soon as possible.`;
  contactText.append(contactTitle, contactPara);

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  const image = document.createElement("img");
  image.src = "img/contact.jpg";
  image.alt = "burger";

  // Create form and set its attributes
  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.setAttribute("action", "");
  form.setAttribute("method", "post");

  // Add form elements
  const nameLabel = createLabel("name", "Name:");
  const nameInput = createInput("text", "name", "name", true);

  const emailLabel = createLabel("email", "Email:");
  const emailInput = createInput("email", "email", "email", true);

  const phoneLabel = createLabel("phone", "Phone:");
  const phoneInput = createInput("tel", "phone", "phone", false);
  phoneInput.setAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}");

  const subjectLabel = createLabel("subject", "Subject:");
  const subjectInput = createInput("text", "subject", "subject", true);

  const messageLabel = createLabel("message", "Message:");
  const messageInput = document.createElement("textarea");
  messageInput.setAttribute("id", "message");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("rows", "5");
  messageInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";

  // Append form elements to the form
  form.append(
    nameLabel,
    nameInput,
    emailLabel,
    emailInput,
    phoneLabel,
    phoneInput,
    subjectLabel,
    subjectInput,
    messageLabel,
    messageInput,
    submitButton
  );

  contactContainer.append(image, form);
  main.append(contactText, contactContainer);

  const footer = createFooter();

  content.append(header, main, footer);
  return content;
}

// Helper function to create a label element
function createLabel(forAttr, labelText) {
  const label = document.createElement("label");
  label.setAttribute("for", forAttr);
  label.textContent = labelText;
  return label;
}

// Helper function to create an input element
function createInput(type, id, name, isRequired) {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("name", name);
  input.required = isRequired;
  return input;
}
