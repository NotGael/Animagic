/*
  DISPLAY ALL
*/
$.ajax({
    type: 'GET',
    url: 'http://10.10.9.118:8080/animals',
    contentType: "application/json; charset=utf-8",
    success: function(data) {
        console.log(data);
        $.each(data, function(index, element) {
            var txt = "<tr>" + "<td>" + element.id + "</td>" +
                               "<td>" + element.type + "</td>" +
                               "<td>" + element.nom + "</td>" +
                               "<td>" + element.description + "</td>" +
                               "<td>" + element.cout + "</td>" +
                               "<td><img src=\"" + element.url + "\" alt=\"Une image d'animal\" style=\"max-width:100px; min-width:100px\"></td>" +
                               "<td>" + element.dateNaissance + "</td>" +
                               "<td><button class=\"btn btn-success btn-lg\" id=\"sendDelete\" data-id=\"" + element.id + "\" >Supprimer</button></td>" +
                               "</tr>";
            console.log(txt);
            $('#animals').append(txt);
        });
    },
    failure: function(errMsg) {
        alert(errMsg);
    }
});
/*
  CREATE
*/
$("#sendCreate").click(function() {
    $.ajax({
        type: "POST",
        url: 'http://10.10.9.118:8080/animals',
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify({
            type: $("#createForm input[name=type]").val(),
            nom: $("#createForm input[name=name]").val(),
            description: $("#createForm input[name=description]").val(),
            cout: $("#createForm input[name=cout]").val(),
            url: $("#createForm input[name=url]").val(),
            dateNaissance: $("#createForm input[name=date]").val(),
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
});
/*
  DELETE
*/
$("#sendDelete").click(function(e) {
    $.ajax({
        type: "DELETE",
        url: 'http://10.10.9.118:8080/animals/'.concat($(this).data("id")).val(),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
});
/*
  UPDATE
*/
$("#sendUpdate").click(function(e) {
    $.ajax({
        type: "PUT",
        url: 'http://10.10.9.118:8080/animals'.concat($(this).data("id")).val(),
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify({
            type: $("#updateForm input[name=type]").val(),
            nom: $("#updateForm input[name=name]").val(),
            description: $("#updateForm input[name=description]").val(),
            cout: $("#updateForm input[name=cout]").val(),
            url: $("#updateForm input[name=url]").val(),
            dateNaissance: $("#updateForm input[name=date]").val(),
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
});
