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
                               "<td>" + element.url + "</td>" +
                               "<td>" + element.dateNaissance + "</td>" +
                               "</tr>";
            $('#table').append(txt);
        });
    }
});
