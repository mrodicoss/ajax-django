$(document).ready(function(){
	setTimeout(function(){
	$.ajax({
		url: "/ajax",
		type: "GET",
		success: function(data){
			$("#html_string").html(data.template)
			$("#more_data_btm").bind("click", function(){
				console.log("poziv krece");
				$.ajax({
					url: "/data",
					type: "GET",
					success: function(data){
						$("#foo").html(data.template)
					},
					error: function(xhr, errmessage, err){
						console.log("Error!!!")
					}

				})
			})
		},
		error: function(xhr, errmessage, err){
			console.log("Error!!!")
		}

	})
	}, 2000)



})
