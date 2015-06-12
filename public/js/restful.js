var restful = (function(){
	var restful = function() {
		var tokenInput = null;

		if (window.csrfToken) {
			tokenInput = "<input type='hidden' name='_token' value='"+ window.csrfToken +"'/>";
		}

		$('[data-method]').append(function(){
			return "\n"+
				"<form action='"+$(this).attr('href')+"' method='POST' style='display:none'>\n"+
				tokenInput +
				"   <input type='hidden' name='_method' value='"+$(this).attr('data-method')+"'>\n"+
				"</form>\n";
		})
			.removeAttr('href')
			.attr('style','cursor:pointer;')
			.attr('onclick','if(confirm("Are you sure?")){$(this).find("form").submit();}');
	};

	restful();

	return restful;
})();
