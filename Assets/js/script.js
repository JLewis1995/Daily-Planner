let currentDay = moment();
let currentHour = new Date().getHours();
let saveButton = $(".saveBtn");




$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, ha"));


function init() {
    applyCSS();
}

function applyCSS() {
   for (let i = 9; i < 18; i++) {
       if (currentHour === i) {
           $(`#${i}`).addClass("present");
       } else if (currentHour > i) {
           $(`#${i}`).addClass("past")
       }
       let textArea = $(`#${i}`);
       console.log(textArea.val());
       textArea.val(localStorage.getItem(i));
   }
}

function saveData(index) {
    localStorage.setItem(index, $(`#${index}`).val());
    console.log($(`#${index}`).val());
}

init();