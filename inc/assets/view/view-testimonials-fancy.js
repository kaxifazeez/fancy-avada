var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

    $( document ).ready( function() {
        if ( typeof FusionPageBuilder.ParentElementView !== 'undefined' ) {
            FusionPageBuilder.fea_fancy_testimonial = FusionPageBuilder.ParentElementView.extend( {

                /**
                 * Runs after view DOM is patched.
                 *
                 * @since 2.0
                 * @return {void}
                 */
                afterPatch: function() {
                    $( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-element-render-fea-testimonials' );
                    this._refreshJs();
                },

            } );
        }
    } );

}( jQuery ) );
