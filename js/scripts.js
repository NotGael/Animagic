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
