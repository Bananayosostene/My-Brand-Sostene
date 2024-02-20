function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000); // Adjust the range as needed
  return `${timestamp}${random}`;
}

const uniqueId = generateUniqueId();
// console.log(uniqueId);

// Function to get the contacts from local storage
function getContacts() {
  const contactsString = localStorage.getItem("contacts");
  return contactsString ? JSON.parse(contactsString) : [];
}

// Function to add a new contact to local storage
function addContact(contact) {
  const contacts = getContacts();
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// Function to update a contact in local storage
function updateContact(updatedContact) {
  const contacts = getContacts();
  const index = contacts.findIndex(
    (contact) => contact.id === updatedContact.id
  );

  if (index !== -1) {
    contacts[index] = updatedContact;
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
}

// Function to delete a contact from local storage
function deleteContact(contactId) {
  const contacts = getContacts();
  const updatedContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );
  localStorage.setItem("contacts", JSON.stringify(updatedContacts));
}

function sendMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "") {
    document.getElementById("name-p").innerHTML = "Please enter your name";
    return false;
  } else {
    document.getElementById("name-p").innerHTML = " ";
  }

  if (email.trim() === "") {
    document.getElementById("email-p").innerHTML = "Please enter your Email";
    return false;
  } else {
    document.getElementById("email-p").innerHTML = " ";
  }

  if (!validateEmail(email)) {
    document.getElementById("email-val-p").innerHTML = "Invalid email format";
    return false;
  } else {
    document.getElementById("email-val-p").innerHTML = " ";
  }

  if (message.trim() === "") {
    document.getElementById("message-p").innerHTML = "Write comment";
    return false;
  } else {
    document.getElementById("message-p").innerHTML = " ";
  }

  var currentDate = new Date();
  var date = currentDate.toISOString().split("T")[0]; // Get date in "YYYY-MM-DD" format
  var time = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }); // Get time in "HH:mm AM/PM" format

  // Save to local storage
  addContact({
    id: uniqueId,
    name: name,
    email: email,
    message: message,
    date: date,
    time: time,
  });

  document.getElementById("sms-sent").textContent = "Message sent!";
  alert("send success");
  window.location.reload();
  resetForm();
}

function validateEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

//

// Example usage:
const newContact = { id: 1, name: "John Doe", email: "john@example.com" };

// Create
addContact(newContact);

// Read
const allContacts = getContacts();
console.log("All Contacts:", allContacts);

// Update
const updatedContact = {
  id: 1,
  name: "Updated Name",
  email: "updated@example.com",
};
updateContact(updatedContact);
console.log("Updated Contacts:", getContacts());

// Delete
const contactIdToDelete = 1;
deleteContact(contactIdToDelete);
console.log("Contacts after deletion:", getContacts());
