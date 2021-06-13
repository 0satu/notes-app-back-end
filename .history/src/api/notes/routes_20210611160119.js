const { addNoteHandler } = require('../../handler');

const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];
