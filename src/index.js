//var registerBlockType = wp.blocks.registerBlockType;
//var createElement = wp.element.createElement;

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'core/firstblock', {
	edit: function () {
		return <p className="class">"Edit JSX"</p>;
	},

	save: function () {
		return <p className="class">"Save JSX ^) "</p>;
	},
} );
