const noteForm = document.getElementById("note-form");
const noteList = document.getElementById("note-list");

noteForm.addEventListener("submit", addNote);

function addNote(event) {
	event.preventDefault();

	const titleInput = document.getElementById("note-title");
	const contentInput = document.getElementById("note-content");

	const title = titleInput.value;
	const content = contentInput.value;

	const note = document.createElement("li");
	note.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

	noteList.appendChild(note);

	titleInput.value = "";
	contentInput.value = "";
}
