import { saveNote, deleteNote, getNoteById, updateNote } from './socket.js';

const notesList = document.querySelector('#notes');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

let saveId = '';

export const noteUI = (note) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class='bg-zinc-800 rounded-md p-4 mt-5 w-[60%] mx-auto'>
    <div class="">
      <h4 class="font-bold">${note.title}</h4>
      <p class="font-extralight">${note.description}</p>
    </div>

    <div class="">
      <button
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full delete" data-id="${note._id}"
      >Delete</button>
      <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full update" data-id="${note._id}"
      >Update</button>
    </div>
  </div>
  `;

  const btnDelete = div.querySelector('.delete');
  const btnUpdate = div.querySelector('.update');

  btnDelete.addEventListener('click', (e) => {
    deleteNote(btnDelete.dataset.id);
  });

  btnUpdate.addEventListener('click', (e) => {
    getNoteById(btnUpdate.dataset.id);
  });

  return div;
};

export const renderNotes = (notes) => {
  notesList.innerHTML = '';
  notes.forEach((note) => {
    notesList.append(noteUI(note));
  });
};

export const fillForm = (note) => {
  title.value = note.title;
  description.value = note.description;
  saveId = note._id;
};

export const onHandleSubmit = (e) => {
  e.preventDefault();
  saveId
    ? updateNote(saveId, title.value, description.value)
    : saveNote(title.value, description.value);

  title.value = '';
  description.value = '';
  saveId = '';
};

export const appenNote = (note) => {
  notesList.append(noteUI(note));
};
