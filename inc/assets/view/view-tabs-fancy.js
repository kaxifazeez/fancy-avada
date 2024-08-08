var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

	$( document ).ready( function() {
		if ( typeof FusionPageBuilder.ParentElementView !== 'undefined' ) {
			FusionPageBuilder.fea_fancy_tabs = FusionPageBuilder.ParentElementView.extend( {

				/**
				 * Runs after view DOM is patched.
				 *
				 * @since 2.0
				 * @return {void}
				 */
				afterPatch: function() {
					this._refreshJs();
				},

			} );
		}
	} );

}( jQuery ) );
