function blink(){
    var i;
    var j;
    for(var i = 0 ; i < 100 ; i++){
        $(".navigation-wrapper").fadeIn(800).fadeOut(800);
    }

    $(".something-caption,.dope-caption,.coming-caption,.soon-caption")
        .fadeIn(1000,function(){
        
        for(j = 0 ; j < 100 ; j++){

            $(".something-caption,.dope-caption,.coming-caption,.soon-caption")
            .fadeIn(900).fadeOut(950).css({
                color : 'red'
            },100)
        }
    })
}