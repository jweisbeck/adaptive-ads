(function( win, undefined ) {
	var doc = win.document,
		docElem = doc.documentElement,

		// set contexts
		ctx = [
			{
				'@': [1,480],
				name: 'basic',
				positions: 3
			},
			{
				name: 'median',
				positions: 3,
				'@': [481,640]
			},
			{
				name: 'large',
				positions: 5,
				'@': [641,960]
			}
		],
		oas_positions = doc.getElementById( 'oas-positions' ).getAttribute( 'content' ).split( ',' ),
		oas_context = '',
		ctxLen = ctx.length-1,
     	defaultContext = ctx[ctxLen]['@'][1], // largest breakpoint's upper limit is the default context
		
		// Get the context
		screenSize = docElem.clientWidth > defaultContext ? docElem.clientWidth : Math.min(win.screen.availWidth, win.screen.availHeight);
		
		
		
		// loop through context options, pick one that matches current screen/browser size range
		for (var i = ctxLen; i >= 0; i--){            
         
		    if( screenSize >= ctx[i]['@'][0] && screenSize < ctx[i]['@'][1]){
				var pos_count = ctx[i].positions,
					offset = (i === 0 ? 0 : ctx[i-1].positions),
					pos_end = pos_count + offset;
                            
				oas.currentContext = oas_positions.slice( offset, pos_end );
				oas_context = ctx[i].name;
				break;
			} else {
                // this is the 'default' context, which lists ALL OF THE active positions            
				var offset = ctx[ctxLen].positions,
					pos_end = oas_positions.length;

				oas.currentContext = oas_positions.slice( offset, pos_end );
				oas_context = 'default';
			}
		}

		// hide

	// OAS parameters below
		
	oas.listpos  = oas.currentContext;
	//oas.listpos = 'EXTRA,TOP,INTRO,CENTRAL,FOOTER,MICRO1,MICRO2,MICRO3,SPONSOR,TILE1,HEADLINE1,HEADLINE2,LOGO1,LOGO2,LOGO3,LOGO4,LOGO5,LOGO6,LOGO10,LOGO8,LOGO14,BILLBOARD,LOGO9,MISC1,MISC2,MISC3,MISC4,MISC5';
	oas.query	= 'oas_context='+oas_context;
	oas.url	= 'http://rmedia.boston.com/RealMedia/ads/';
	//oas.url 	= 'http://delivery.uat.247realmedia.com/'
	oas.target	= '_top';
	oas.rn		= '001234567890';
	oas.rns		= '1234567890';
	oas.r		= Math.random() + "";
	oas.rns		= oas.rn.substring(2, 11);
	oas.version = 11;
	
	// allow ad disabling for layout development
	if( oas.dev ) {
		window.OAS_RICH = function(pos) {
			//console.log(pos);
			return false;
		};
	} else{
		document.writeln('<script src="'+ oas.url +'adstream_mjx.ads/'+ oas.sitepage +'/1'+ oas.rns +'@'+ oas.listpos +'?'+ oas.query +'"> <\/script>');
	}


	
})( this );
