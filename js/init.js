var gmw = function(args)
{
    this.init(args);
};

gmw.prototype.init = function(args)
{
    if(typeof args.selector.canvas === 'undefined') return false;
    
    var $canvas = $('#google-map-canvas'),
        defaults = {
            center: new google.maps.LatLng(0, 0),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        options = (typeof args.options === 'object') ? $.extend(defaults, args.options) : defaults;
    
    this.draw($canvas, options);
};

gmw.prototype.draw = function($canvas, options)
{
    new google.maps.Map($canvas, options);
};



$(function()
{
    var map = new gmw(
    {
        selector: {
            canvas: '#google-map-canvas'
        },
        options: {
            
        }
    });
});