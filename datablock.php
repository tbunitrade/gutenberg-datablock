<?php
/**
 * Plugin Name: Data Block
 * PLugin URI: https://sierra-group.in.ua
 * Description: My custom block by react for wordpress
 * Author: Oleksandr Sonich
 * Author UIR: https://sierra-group.in.ua
 *
 */
//entry point

function blocks_course_firstblock_init() {
    register_block_type_from_metadata(__DIR__);
}

add_action("init", "blocks_course_firstblock_init");
