class toDoList{
    constructor() {
          this._list = [];
    }
    getList(){
          return this._list;
    }

    clearList(){
          this._list = [];
    }

    addItemToList(itemObj){
          this._list.push(itemObj);
    }

    removeItemFromList(id){
          const list = this._list;
          for(leti = 0; i < list.length; i++){
                if(list[i]._id === id) {
                      list.splice(i, 1);
                      break;
                }
          }
    } 
} 

class toDoItem{
    constructor() {
        this._id = null;
        this._item = null;
    }

    getId(){
        return this._id;
    }

    setId(id) {
        this._id;
    }

    getitem(){
        return this._item;
    }

    setItem(item) {
        this._item = item;
    }
}


const todolist = new toDoList();

// launch app

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // add listner
    const itemEntryForm = document.getElementById("itemEntryForm")
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission()
    })

    const clearItems = document.getElementById("clearItem")
    clearItems.addEventListener("click", (event) => {
        const list = todolist.getList()
        if(list.length) {
            const confirmed = ("Are you sure you want to clear the entire list?")
            if (confirmed) {
                todolist.clearList()
                    updatePersistentData(toDoList.getList())
                    refreshThePage()

            }
        }
    })

    // procedural
    // load list object
    // refresh the page
    refreshThePage();
}

const refreshThePage = () => {
    clearListDisplay();
    renderList();
    // clearItemEntryField();
    // setFocusOnItemEntry();
}

const clearListDisplay = () => {
    const parentElement = document.getElementById("listItem");
    deleteContent(parentElement);
}

const deleteContent = () => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

const renderList = () => {
    const list= toDoList.getList();
    list.forEach((item) => {
        buildListItem(item);
    });
};

const buildListItem = (item) => {
    const div = document.createElement("div")
    div.className = "item"
    const check = document.createElement("input")
    check.id = item.getId()
    check.tabIndex = 0
    addClickListnerToCheckbox(check)
    const label = document.createElement("label")
    label.htmlFor = item.getid()
    label.textContent = item.getItem()
    div.appendChild(check)
    div.appendChild(label)
    const container = document.getElementById("listItem")
    container.appendChild(div)
}

const addClickListnerToCheckbox = (checkbox) => {
    checkbox.addEventListener("click", (event) => {
        toDoList.removeItemFromList(checkbox.id)
        updatePersistentData(toDoList.getList())
        setTimeout(() => {
            refreshThePage() 
        }, 1000)
    })
}

const updatePersistentData = (listArray) => {
    localStorage.setItem("myToDoList", JSON.stringify(listArray))
}

const clearItemEntryField = () => {
    document.getElementById("newItem").value = ""
}

const setFocusOnItemEntry = () => {
    document.getElementById("newItem").focus()
}

const processSubmission = () => {
    const newEntryText = getNewEntry()
    if(!newEntryText.length) return;
    const nextItemId = calcNextItemId()
    const toDoItem = createNewItem(nextItemId, newEntryText)
    toDoList.addItemToList(toDoItem);
    updatePersistentData(toDoList.getList())
    refreshThePage()
}

const getNewEntry = () => {
    return document.getElementById("newItem").value.trim()
}

const calcNextItemId = () => {
    let nextItemId = 1
    const list = toDoList.getList()
    if (list.length > 0) {
    nextItemId = list[list.length - 1].getId() + 1
 }
 return nextItemId
}

const createNewItem = (itemId, itemText) => {
    const toDo = new toDoItem()
    toDo.setId(itemId);
    toDo.setItem(itemText)
    return toDo
}