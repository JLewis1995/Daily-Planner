// set variables
let currentDay = moment();
let currentHour = new Date().getHours();
let saveButton = $(".saveBtn");

// set current date at top of page
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, ha"));

// on load function
function init() {
  applyCSS();
}

// apply CSS styling based upon time via 24hr clock & associated i value
function applyCSS() {
  for (let i = 9; i < 18; i++) {
    if (currentHour === i) {
      $(`#${i}`).addClass("present");
    } else if (currentHour > i) {
      $(`#${i}`).addClass("past");
    }
    //    variable to gather user entered data
    let textArea = $(`#${i}`);
    // display any saved data to respective timeblock
    textArea.val(localStorage.getItem(i));
  }
}

// function to save user entered data to local storage
function saveData(index) {
  localStorage.setItem(index, $(`#${index}`).val());
}

init();
