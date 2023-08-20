import Note from './models/Note';

export default (io) => {
  io.on('connection', (socket) => {
    const emitNotes = async () => {
      const notes = await Note.find();
      io.emit('server:loadnotes', notes);
    };
    emitNotes();

    socket.on('client:newnote', async (data) => {
      const newNote = new Note(data);
      const savedNote = await newNote.save();
      io.emit('server:newnote', savedNote);
    });

    socket.on('client:deletenote', async (id) => {
      await Note.findByIdAndDelete(id);
      emitNotes();
    });

    socket.on('client:getnote', async (id) => {
      const noteFound = await Note.findById(id);
      io.emit('server:selectednote', noteFound);
    });

    socket.on('client:updatenote', async (updatedNote) => {
      const noteUpdated = await Note.findByIdAndUpdate(updatedNote._id, {
        title: updatedNote.title,
        description: updatedNote.description,
      });
      emitNotes();
    });
  });
};
