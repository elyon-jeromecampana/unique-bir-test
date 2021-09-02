odoo.define('bir_module.BirModule', function(require) {
"use strict";
var AbstractAction = require('web.AbstractAction');
var core = require('web.core');
var Dialog = require('web.Dialog');
var Session = require('web.session');

var BirModule = AbstractAction.extend({
contentTemplate: 'bir_module_xml', 
start: function(){
},
events: {
 "click .button_operations": function(){
    
 },
 },
});
core.action_registry.add('bir_module_module', BirModule);
return {
 BirModule: BirModule,
};

});
