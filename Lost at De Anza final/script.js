function submission_confirmation(e) {
    e.preventDefault();
    // TODO: Fill in the rest 
    var name = document.getElementById("name").value;
    var location = document.getElementById("location").value;
    var incident = document.getElementById("incident").value;

    console.log('Hi, Police HQ, There is a new lost report from the user');
    console.log(name + ' has lost the item near the location: ' + location);
    console.log(incident);

    alert("Your request has been successfully sent to the Police Station");
}