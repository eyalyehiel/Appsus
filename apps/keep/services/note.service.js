import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    get,
    post,
    remove,
    put,


}

const NOTES_KEY = 'notesDB'

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://image.cnbcfm.com/api/v1/image/106349589-1579720435046gettyimages-1192592454.jpeg?v=1579721288&w=929&h=523",
            title: "Google"
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: 'assets/img/noteImgs/dog.webp',
            title: "My dog"
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            label: "House missions",
            todos: [
                { txt: "Wash the dishes", doneAt: null },
                { txt: "Clean my room", doneAt: null },
                { txt: "Clean the garden", doneAt: null }
            ]
        }
    },
    {
        id: "n103",
        type: "note-video",
        info: {
            txt: "Get my stuff together",
            url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ig5oMN4XQz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: 'assets/img/noteImgs/garden.jpeg',
            title: "My garden"
        },
        style: {
            backgroundColor: "#fff"
        }
    },
];


_createNotes()
function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = gNotes
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}

function query() {
    return storageService.query(NOTES_KEY)
}
function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}
function post(newNote) {
    return storageService.post(NOTES_KEY, newNote)
}
function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}
function put(note) {
    return storageService.put(NOTES_KEY, note)
}
