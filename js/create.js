$(document).ready(function(){
    // click on button submit
    $("#submit").on('click', function(){
        // send ajax
        $.ajax({
            url: 'http://10.10.9.118:8080/animals', // url where to submit the request
            type : "POST", // type of action POST || GET
            dataType : 'json', // data type
            data : $("
            
            #contactForm input[name=type]").val(), // post data || get data
            success : function(result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    });
});

$("#date").datetimepicker({dateFormat: "dd/mm/yyyy"});
