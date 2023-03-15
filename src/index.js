//var registerBlockType = wp.blocks.registerBlockType;
//var createElement = wp.element.createElement;

import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from "@wordpress/block-editor";
import "./style.scss";

registerBlockType( 'core/firstblock', {
	edit: function () {
		const blockProps = useBlockProps();
		console.log('blockProps',blockProps);
		return <p {...blockProps}>Edit JSX</p>;
	},

	save: function () {
		const blockProps = useBlockProps.save();
		return <p {...blockProps}>Save JSX </p>;
	},
} );
