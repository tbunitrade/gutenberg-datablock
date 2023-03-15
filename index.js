var registerBlockType = wp.blocks.registerBlockType;

registerBlockType("core/firstblock", {
    edit: function() {
        return "Edit";
    },

    save: function() {
        return "Save";
    },
});
