$.ajax({
    type: 'GET',
    url: 'http://10.10.9.118:8080/animals',
    data: {},
    dataType: 'json',
    success: function (data) {
        $.each(data, function(index, element) {
            var txt = "<tr>" + "<td>" + element.id + "</td>" +
                               "<td>" + element.type + "</td>" +
                               "<td>" + element.nom + "</td>" +
                               "<td>" + element.description + "</td>" +
                               "<td>" + element.cout + "</td>" +
                               "<td><img src=\"" + element.url + "\" alt=\"Une image d'animal\" style=\"max-width:100px; min-width:100px\"></td>" +
                               "<td>" + element.dateNaissance + "</td>" +
                               "</tr>";
            $('#animalTable1').append(txt);
        });
    }
});

$.ajax({
    type: 'GET',
    url: 'http://10.10.9.122:8080/animals',
    data: {},
    dataType: 'json',
    success: function (data) {
        $.each(data, function(index, element) {
            var txt = "<tr>" + "<td>" + element.id + "</td>" +
                               "<td>" + element.type + "</td>" +
                               "<td>" + element.nom + "</td>" +
                               "<td>" + element.description + "</td>" +
                               "<td>" + element.cout + "</td>" +
                               "<td><img src=\"" + element.url + "\" alt=\"Une image d'animal\" style=\"max-width:100px; min-width:100px\"></td>" +
                               "<td>" + element.dateNaissance + "</td>" +
                               "</tr>";
            $('#animalTable2').append(txt);
        });
    }
});

$.ajax({
    type: 'GET',
    url: 'http://10.10.9.121:8080/api/animals',
    data: {},
    dataType: 'json',
    success: function (data) {
        $.each(data, function(index, element) {
            var txt = "<tr>" + "<td>" + element.id + "</td>" +
                               "<td>" + element.type + "</td>" +
                               "<td>" + element.nom + "</td>" +
                               "<td>" + element.description + "</td>" +
                               "<td>" + element.cout + "</td>" +
                               "<td><img src=\"" + element.url + "\" alt=\"Une image d'animal\" style=\"max-width:100px; min-width:100px\"></td>" +
                               "<td>" + element.dateNaissance + "</td>" +
                               "</tr>";
            $('#animalTable3').append(txt);
        });
    }
});

$("#sendMessageButton").click(function() {
  $(document).ready(function(){
      // click on button submit
      $("#submit").on('click', function(){
          // send ajax
          $.ajax({
              url: 'http://10.10.9.118:8080/animals', // url where to submit the request
              type : "POST", // type of action POST || GET
              dataType : 'json', // data type
              data : {
                type: $("#contactForm input[name=type]").val(),
                nom: $("#contactForm input[name=nom]").val(),
                description: $("#contactForm input[name=description]").val(),
                cout: $("#contactForm input[name=cout]").val(),
                url: $("#contactForm input[name=url]").val(),
                dateNaissance: $("#contactForm input[name=dateNaissance]").val()
              },
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
});


$("#date").datetimepicker({dateFormat: "dd/mm/yyyy"});
