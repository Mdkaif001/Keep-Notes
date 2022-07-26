const addButton = document.querySelector("#add");
const updateLSData =()=>{
    const textarea = document.querySelectorAll("textarea");
    const notes = [];
    // console.log(textarea);
    textarea.forEach((note)=>{
        return notes.push(note.value)
    })
    // console.log(notes);

    localStorage.setItem("notes",JSON.stringify(notes));
}


const addNotes = (text = "") => {
  const row= document.createElement("div");
  row.classList.add("row");
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
 <div class="opretion">
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="deleteE"><i class="fa-solid fa-trash-can"></i></button> 
        </div>

        <div class="main ${text ? "" :"hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>`;

        note.insertAdjacentHTML("afterbegin",htmlData);
        // console.log(note);

        //get reference
     const edit = note.querySelector(".edit");
     const deleteE = note.querySelector(".deleteE");
     const main = note.querySelector(".main");
     const textarea = note.querySelector("textarea");
    /// delete note
    deleteE.addEventListener("click",()=>{
        note.remove();
        updateLSData();
    })

    ///toggle edit button
    textarea.value= text;
    main.innerHTML = text;
    // toggle 
    edit.addEventListener("click",()=>{
        main.classList.toggle("hidden")
        textarea.classList.toggle("hidden")
    })
    textarea.addEventListener("change",(event)=>{
        const value = event.target.value;
        // console.log(value);
        main.innerHTML=value;

        updateLSData();
    })

        document.body.appendChild(note)

};
///getting the elements
const notes = JSON.parse(localStorage.getItem("notes"));

if(notes){notes.forEach((note)=>addNotes(note))};


addButton.addEventListener("click", () => addNotes());
