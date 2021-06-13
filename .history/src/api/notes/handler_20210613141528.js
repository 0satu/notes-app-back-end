class getNotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request) {
    const { title = 'untitled', body, tags } = request.payload;
    this._service.addNote(title, body, tags);
  }

  getNotesHandler() {}

  getNoteByIdHandler() {}

  putNoteByIdHandler() {}

  deleteNoteByIdHandler() {}
}
