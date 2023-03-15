var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType("core/firstblock", {
    edit: function() {
        //return "Edit";

        return createElement('p', {
            className: "classEdit"
        },'Edit');
    },

    save: function() {
        return createElement('p', null,'Save');
    },
});
