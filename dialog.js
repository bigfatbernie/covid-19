      jQuery.noConflict();
      jQuery(function() {
        jQuery(".hintbody").hide();
        jQuery(".hinttest").click(function() {
          jQuery(this.nextSibling).toggle('fast');
        })
        jQuery(".hinttag").click(function() {
          jQuery(this.nextSibling).toggle('fast');
        })
        jQuery(document).click(function(event) {
        	if (!jQuery(event.target).is(".hinttest") && !jQuery(event.target).is(".hinttag")) {
    		jQuery(".hintbody").each(function() {
    		if (jQuery(this).is(":visible")) {
					jQuery(this).toggle('fast');
    			} 
				});
    		} 
			});
      });
