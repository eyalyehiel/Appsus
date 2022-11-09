import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService ={
    query,
    get,
    post,
    remove,
    put,
    pin,

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
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
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
function post(newNote){
    return storageService.post(NOTES_KEY,newNote)
}
function remove(noteId){
    return storageService.remove(NOTES_KEY,noteId)
}
function put(note){
    return storageService.put(NOTES_KEY,note)
}
function pin(noteId){
    return storageService.query(NOTES_KEY)
                        .then(notes => {
                            const idx = notes.findIndex(note => note.id === noteId)
                            const note = notes.splice(idx,1)[0]
                            notes.unshift(note)
                            utilService.saveToStorage(NOTES_KEY,notes)
                        })
}
