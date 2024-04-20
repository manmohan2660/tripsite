$(document).ready(function(){
    $('#signup-form').submit(function(e){
        e.preventDefault(); // Prevent the default form submission
        var formData = $(this).serializeArray(); // Serialize form data
        var userData = {}; // Object to store form data
        // Convert serialized array to object
        $.each(formData, function(index, field){
            userData[field.name] = field.value;
        });
        // Simulate form submission (replace with actual submission logic)
        setTimeout(function(){
            alert('Sign up successful!\nForm Data: ' + JSON.stringify(userData));
        }, 500);
    });
});
