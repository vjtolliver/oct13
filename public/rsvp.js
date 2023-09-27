const rsvpTheGuest = async (event) => {
    event.preventDefault();
      
      var going = document.getElementById("going");
      var goingNow = document.querySelector("#first-name");
      var gstStatus = document.querySelector("#attend-status").value.trim();
      var gname = document.querySelector("#rsvpname").value.trim();
    //   var explain = document.getElementById("explanation");
    //   var cash = document.getElementById("cash-app");
    //   var apple = document.getElementById("apple-pay");
    //   var accomEx = document.getElementById("accom-ex");
  
      console.log(gname);
  
      
    if (gname && gstStatus) {
      const response = await fetch(`/api/pleasework/`, {
        method: 'POST',
        body: JSON.stringify({
          gname,
          gstStatus,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
      //document.location.replace('/rsvp');
       going.append("THANK YOU")
       goingNow.append(gname + " For Your RSVP! You have been saved as: " + gstStatus + ".");
    //    explain.append("To complete your RSVP, please text 334-414-7653 with your name and 'GOING' by Septemeber 16th. A total of $150.00 per person will need to be sent in by SEPTEMBER 27TH 2023 by one of the following payment methods:");
    //    cash.append("CASH APP: $victoria12345678 or $itsTeam333");
    //    apple.append("APPLE PAY: 334-414-7653 or 334-462-8605");
    //    accomEx.append("Accomadations will be posted on September 20th.");
       localStorage.setItem("rsvpname.value", JSON.stringify(rsvpname.value));
      rsvpname.value = '';
    //   localStorage.setItem("attend-status.value", JSON.stringify(attend-status.value));
      //attend-status.value = '';
      } else {
        alert('Failed to RSVP')
        console.log(response.statusText);
      }
  
    }
      }
    ;
    document
    .querySelector("#submitplease")
    .addEventListener("click", rsvpTheGuest);