import { loadNotes, onNewNote, onSelected } from './socket.js';
import { onHandleSubmit, renderNotes, appenNote, fillForm } from './iu.js';

onNewNote(appenNote);
loadNotes(renderNotes);
onSelected(fillForm);

const noteForm = document.querySelector('#noteForm');
noteForm.addEventListener('submit', onHandleSubmit);
