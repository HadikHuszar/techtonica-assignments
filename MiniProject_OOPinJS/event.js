//creating an Event Class ....

class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
   addAvailableTickets(ticketname, ticketprice) {
    let ticket = {
      ticketname: ticketname,
      ticketprice: ticketprice,
    }

   this.availableTickets.push(ticket);
  }
    allTickets() {
      let result = "";

      for (let i = 0; i < this.availableTickets.length; i++) {
        result += `${this.availableTickets[i]["ticketname"]} <i>($${this.availableTickets[i]["ticketprice"]})</i>    `
      }
    return "&nbsp; &nbsp; <b>All tickets:</b>   &nbsp; " + result;
  }

    searchTickets(min, max) {

      let result = "";

      let filteredArray = this.availableTickets.filter(ticket => ticket["ticketprice"] > min && ticket["ticketprice"] < max)

      for (let i = 0; i < filteredArray.length; i++) {
        result += `&nbsp;${filteredArray[i]["ticketname"]} <i>($${filteredArray[i]["ticketprice"]})  </i>`
      }
      if (result === "") {
        return "Sold Out. No Tickets Available."
      } else {
        return `Eligible Tickets: </b>${result}`
      }

  }
  /////////  AM HAVING SCOPING ISSUES .... CAN'T GET THE AVAILABLE TICKETS PUSHED .... WILL MEET WITH MENTOR THURSDAY EVENING
}

class TicketType {
constructor(name, price) {
  this.name = name;
  this.price = price;
}
}




// The below statements creates three objects...

const eventObj1 = new Event('KLOS Golden Gala','An Evening with Hollywood Vampires');
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious War Tour');
const eventObj3 = new Event('Jenny Lewis', 'On The Line Tour 2019');


//creating an empty array ...

const eventArray = new Array();


// // pushing single object to an array
// eventArray.push(eventObj1);


// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);



eventObj1.addAvailableTickets("Human", 299);
eventObj1.addAvailableTickets("Vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

eventObj3.searchTickets(100, 150)
//eventObj3.searchTickets("Mezzanine", 200)
//eventObj3.searchTickets("Balcony", 100)



//console.log(eventObj3.allTickets());
//console.log(eventObj3.searchTickets(0,250));

/// creating All Tickets elements ///

for (let event of eventArray) {
  let li = document.createElement("li");
  li.innerHTML = `<b>${event.name}</b> &mdash;<i> "${event.description}" </i> &nbsp;${event.allTickets()}`;
  document.getElementById("event").appendChild(li);
}


/// creating Search Tickets elements ///

for (let event of eventArray) {
  let li2 = document.createElement("li");
//  li2.innerHTML = `${event.name} - ${event.description} - ${event.searchTickets()}`;
  li2.innerHTML = `<b>${event.name}</b> &mdash;<i> "${event.description}" </i> &nbsp;&nbsp;<b>${event.searchTickets(0,200)}</b>`;
  document.getElementById("search").appendChild(li2);
}

