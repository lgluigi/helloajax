/*var myform = document.getElementById("myform");
var fd = new FormData(myform);

/*$.ajax({
  url: 'GetUserServlet',
  data: {'nomePaciente':'nomePaciente', 'idadePaciente':'idade'},
  success: function(response){}
});

/*$(document).ready(function() {
    $('#btnInsert').click(function(event) {
            var name = $('#nomePaciente').val();
            $.get('GetUserServlet', {
                    nomePaciente : name
            }, function(responseText) {
                    $('#ajaxGetUserServletResponse').text(responseText);
            });
    });
});
*/	

$(document).ready(function() {
	$('#btnInsert').click(function() {
		$.ajax({
			url : 'GetUserServlet',
			data : {
				"nomePaciente" : $('#nomePaciente').val(),
				"idadePaciente" :  $('#idadePaciente').val(),
			},
			success : function(responseText) {
				$('#ajaxGetUserServletResponse').text(responseText);
			}
		});
	});
});
