define(["conditioner"],function(e){"use strict";return{arrange:function(){this.remember("moves",0),this.remember("moves-required",2),document.addEventListener("mousemove",this,!1),document.addEventListener("mousedown",this,!1);var e=this;setTimeout(function(){document.removeEventListener("mousemove",e,!1),document.removeEventListener("mousedown",e,!1)},3e4)},act:function(t){if("mousemove"===t.type){var n=this.remember("moves");n++,this.remember("moves",n),n>=this.remember("moves-required")&&(document.removeEventListener("mousemove",this,!1),document.removeEventListener("mousedown",this,!1),e.Observer.publish(this,"change"))}else this.remember("moves",0)},assert:function(e){var t=null;return this.remember("moves")>=this.remember("moves-required")&&(t="available"),t===e}}});