/*********************************
 * Usefull Scipts 
 * Author: Various
*********************************/

define(['jquery'], function($) {

    //Chunk array
    Array.prototype.chunk = function(chunkSize) {
        var array = this;
        return [].concat.apply([],
        array.map(function(elem, i) {
            return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
        }));
    }
    
     //get last array member
    Array.prototype.last = function() {
    	return this[this.length-1]
    }

    //Swap elements in array
    Array.prototype.swapItems = function(a, b) {
        this[a] = this.splice(b, 1, this[a])[0];
        return this;
    }

    //Clone array
    Array.prototype.clone = function() {
        return this.slice(0);
    };
    
    //capitalize first letter
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

}); 