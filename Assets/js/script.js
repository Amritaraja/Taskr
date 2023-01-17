// Displays Current date
let today = dayjs().format('dddd, MMMM D, YYYY');
$('#today').text(today);


//variables
let saveBtn = $(".saveBtn")
let clearBtn = $(".clear")

$(function () {
  saveBtn.on('click',function () {
    let task = $(this).siblings("textarea").val();
    let time = $(this).parent().attr("id")
    
    localStorage.setItem(time, task);
  });
  
  function currentHour() {
    let currentTime = dayjs().format('H');
    console.log(currentTime);
    
    // converts id string into an integer
  $(".timeSlot").each(function(){
    let timeSlot = parseInt($(this).attr("id"));
    console.log(timeSlot);

    // checks current-time with the time-slot and adds the appropriate class tag
    if (timeSlot < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (timeSlot == currentTime){
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
  }

  $("#09 textarea").val(localStorage.getItem("09"));
  $("#10 textarea").val(localStorage.getItem("10"));
  $("#11 textarea").val(localStorage.getItem("11"));
  $("#12 textarea").val(localStorage.getItem("12"));
  $("#13 textarea").val(localStorage.getItem("13"));
  $("#14 textarea").val(localStorage.getItem("14"));
  $("#15 textarea").val(localStorage.getItem("15"));
  $("#16 textarea").val(localStorage.getItem("16"));
  $("#17 textarea").val(localStorage.getItem("17"));

  currentHour();
});

clearBtn.on('click',function () {
  localStorage.clear();
  console.log("ckicked")
  location.reload();
});

