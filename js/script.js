// /// Business Logic for MOVIETICKETS ---------
// function MOVIETICKETS() {
//     this.tickets = {};
//     this.currentId = 0;
// }
// MOVIETICKETS.prototype.assignId = function () {
//     this.currentId += 1;
//     return this.currentId;
// };
// MOVIETICKETS.prototype.addTicket = function (ticket) {
//   ticket.id = this.assignId();
//     this.tickets[ticket.id] = ticket;
// }
// MOVIETICKETS.prototype.findTicket = function (id) {
//     if (this.tickets[id] != undefined) {
//         return this.tickets[id];
//     }
//     return false;
// };

// MOVIETICKETS.prototype.deleteList = function (id) {
//     if (this.tickets[id] === undefined) {
//         return false;
//     }
//     delete this.tickets[id];
//     return true;
// };


// function Ticket(name, seat, time) {
//     this.name = name;
//     this.seat = seat;
//     this.time = time;
// }


// function displayTicketDetails(listToDisplay) {
//     let ticketsList = $("ul#tickets");
//     let htmlForTicketInfo = "";
//     Object.keys(listToDisplay.tickets).forEach(function (key) {
//         const ticket = listToDisplay.findTicket(key);
//         htmlForTicketInfo += "<li id=" + ticket.id + ">" + ticket.name  + "</li>";
//     });
//     ticketsList.html(htmlForTicketInfo);
// }

// function attachTicketListeners() {
//     $("ul#tickets").on("click", "li", function () {
//         showTicket(this.id);
//     });
//     $("#buttons").on("click", "button", function () {
//         list.deleteList(this.id);
//         $("#moviesdetails").hide();
//         displayTicketDetails(list);
//     });
// }

// function showTicket(ticketId) {
//     const ticket = list.findTicket(ticketId);
//     $("#moviesdetails").show();
//     $(".name").html(ticket.name);
//     $(".seat").html(ticket.seat);
//     $(".time").html(ticket.time);
//     let buttons = $("#buttons");
//     buttons.empty();
//     buttons.append("<button class='btn btn-danger' id=" + + ticket.id + ">Delete</button>");
// if(ticket.name === "Adams Project"){
//     $(".price").html("$" + 150*ticket.seat);
// }
// else if(ticket.name === "Alaadin"){
//     $(".price").html("$" + 200*ticket.seat);
// }
// else if(ticket.name === "Ant Man"){
//     $(".price").html("$" + 250*ticket.seat);
// }
// else if(ticket.name === "Black Adams"){
//     $(".price").html("$" + 250*ticket.seat);
// }
// else if(ticket.name === "Captain Marvel"){
//     $(".price").html("$" + 250*ticket.seat);
// }
// else if(ticket.name === "Enola"){
//     $(".price").html("$" + 200*ticket.seat);
// }
// else if(ticket.name === "Extraction 2"){
//     $(".price").html("$" + 200*ticket.seat);
// }
// else if(ticket.name === "Fantastic Beast"){
//     $(".price").html("$" + 250*ticket.seat);
// }
// else if(ticket.name === "Megan"){
//     $(".price").html("$" + 200*ticket.seat);
// }
// else if(ticket.name === "Shazam Fury of the Gods"){
//     $(".price").html("$" + 250*ticket.seat);
// }
// else if(ticket.name === "Wakanda Forever"){
//     $(".price").html("$" + 250*ticket.seat);
// }
// else{
//      $(".price").html("$" + 000);
// }
// }
// // User Interface Logic ---------
// let list = new MOVIETICKETS();

// $(document).ready(function () {
//     attachTicketListeners();

//     $("form#form").submit(function (event) {
//         event.preventDefault();
//         const inputtedName = $("select#name").val();
//         const inputtedNoOfSeat = $("select#seat").val();
//         const inputtedTime = $("select#time").val();

//         console.log(inputtedName);
//         console.log(inputtedNoOfSeat);
//         console.log(inputtedTime);
//         // The next three lines are new:
//         $("input#new-first-name").val("");
//         $("input#new-last-name").val("");
//         $("input#new-phone-number").val("");

//         let newTicket = new Ticket(inputtedName, inputtedNoOfSeat, inputtedTime);
//         list.addTicket(newTicket);
//         displayTicketDetails(list);
//         console.log(list.tickets)
        
//       if (inputtedName === "Adams Project"){
//       $("#image1").show("<li>" + inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime)
//       }
//     else if (inputtedName === "Alaadin"){
//       $("#image2").show("<li>"  + inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime + "</li>")
//       }
//       else if (inputtedName === "Ant Man"){
//       $("#image3").show("<li>" + inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime + "</li>")
//       }
//        else if (inputtedName === "Black Adams"){
//       $("#image4").show("<li>" + inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime + "</li>")
//       }
//        else if (inputtedName === "Captain Marvel"){
//       $("#image5").show("<li>" + inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime + "</li>")
//       }
//       else if (inputtedName === "Enola"){
//         $("#image6").show("<li>"+ inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime + "</li>")
//         }
//       else if (inputtedName === "Extraction 2"){
//             $("#image7").show("<li>" + inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime + "</li>")
//         }
//         else if (inputtedName === "Fantastic Beast"){
//       $("#image8").show("<li>"+ inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime + "</li>")
//       }
//       else if (inputtedName === "Megan"){
//         $("#image9").show("<li>"+ inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime + "</li>")
//         }
//       else if (inputtedName === "Shazam Fury of the Gods"){
//             $("#image10").show("<li>"+ inputtedName + "" + inputtedNoOfSeat  + "" + inputtedTime  + "</li>")
//         }
//         else if (inputtedName === "Wakanda Forever"){
//             $("#image11").show("<li>" + inputtedName + " " + inputtedNoOfSeat  + " " + inputtedTime + "</li>")
//             }   


//     });


//     $("#output").hide();
//     $("#buy").click(function(){
//         $("#output").show();
//         $("#ticketform").hide();
//     })
//     $("#again").click(function(){
//         $("#ticketform").show();
//         $("#output").hide();
//     })
// });

