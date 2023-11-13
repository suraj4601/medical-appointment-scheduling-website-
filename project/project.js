function myFunction() {
    var txt;
    if (confirm("Your appoitment has been booked")) {
      txt = "Your appoitment has been booked";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
 