(function($) {     

    $.fn.hlrlookup = function( options ) {
        
        var settings = $.extend({
            complete     : null,
            error        : null,
            password     : '',
            apikey       : '',
            msisdninput  : ''
        }, options);

        return this.each( function() {
            
            $(this).submit( function(e) {
                
                e.preventDefault();
                
                 var msisdn = $(this).find(settings.msisdninput).val();
                 
                $.ajax( {
                    type: 'GET',
                    url: 'https://www.hlrlookup.com/api/hlr/?apikey='+settings.apikey+'&password='+settings.password+'&msisdn='+msisdn,
                    success: function (msg) {
                        var json = JSON.parse(msg);
                        if ( json.error_code == 999 ) {
                            settings.error.call(this,"invalid format");
                        } else {
                            if ( json.error_code == 0 ) {
                                settings.complete.call(this,"live");
                            } else {
                                settings.complete.call(this,"not live");
                            }
                        }
                    },
                    error: function(msg) {
                        settings.error.call(this,msg);
                    }
                })
            }); 
        }); 

    }

}(jQuery));