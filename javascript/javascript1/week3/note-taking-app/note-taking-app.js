const notes = [];

function saveNote(content, id) {
  notes.push({
    content: content,
    id: id,
  });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
  return notes.find((notes) => notes.id === id);
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
  notes.forEach((note) => {
    console.log(
      `The note with id: ${note.id}, has the following note text: "${note.content}"`
    );
  });
}

logOutNotesFormatted();
