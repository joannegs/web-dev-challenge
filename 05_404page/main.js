function randomPosition(){
    var currentH = $(window).height();
    var currentW = $(window).width();
    
    var newH = Math.floor(Math.random() * currentH);
    var newH = Math.floor(Math.random() * currentW);
    
    return [newH,newW];    
}