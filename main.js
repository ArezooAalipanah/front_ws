const allNotes =[
    {
        id: 1,
        title: 'title 1',
        text: 'text 1',
        color: 'blue',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },

    {
        id: 2,
        title: 'title 2',
        text: 'text 2',
        color: 'white',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },

    {
        id: 3,
        title: 'title 3',
        text: 'text 3',
        color: 'pink',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },
];


function creatNote(title, text) {
    const note={
        id: getId(),
        title: title,
        text: text,
        color: 'pink',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }
    };

    allNotes.push(note);
}

function editNote(id, title, text, color){
    const note=findById(id);
    })

    return note;
}

function getId() {
    return (Math.random()*10e10).toFixed(0)
}

function findById(id){
    allNotes.find(function (item) {
        return item.id===id
    }}