class getNotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request, h) {
    try {
      const { title = 'untitled', body, tags } = request.payload;
      const noteId = this._service.addNote(title, body, tags);
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: { noteId },
      });
      response.code(201);
      return response;
    } catch (err) {
      const response = h.response({
        status: 'fail',
        message: err.message,
      });
      response.code(400);
      return response;
    }
  }

  getNotesHandler() {
    const notes = this._service.getNotes();
    return {
      status: 'success',
      data: { notes },
    };
  }

  getNoteByIdHandler(request, h) {
    try {
      const { id } = request.params;
      const note = this._service.getNoteById(id);
      return {
        status: 'success',
        data: { note },
      };
    } catch (err) {
      const response = h.response({
        status: 'fail',
        message: err.message,
      });
      response.code(400);
      return response;
    }
  }

  putNoteByIdHandler(id) {
      const {id} = request.params;
      this._service.editNoteById(id, request.payload);

  }

  deleteNoteByIdHandler() {}
}
