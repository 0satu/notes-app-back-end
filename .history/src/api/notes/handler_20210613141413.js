class getNotesHandler {
  constructor(service) {
    this._service = service;
  }

  postNoteHandler(request) {
    const { title = 'untitled', body, tags } = request.payload;
  }

  getNotesHandler() {}

  getNoteByIdHandler() {}

  putNoteByIdHandler() {}

  deleteNoteByIdHandler() {}
}
