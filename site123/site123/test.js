let ans1 =0;
$(document).ready(function(){
    $('#da').click(function(){
         ans1 ++;
         console.log(ans1)
        
        $('#nu').remove()
        $(this).addClass('colorat')
    })
    $('#nu').click(function(){
        ans1 =ans1-0;
        console.log(ans1)
        $('#da').remove()
        $(this).addClass('colorat')
   })
   $('#da1').click(function(){
    ans1 ++;
    console.log(ans1)
   
   $('#nu1').remove()
   $(this).addClass('colorat')
})
    $('#nu1').click(function(){
    ans1 =ans1-0;
    console.log(ans1)
    $('#da1').remove()
    $(this).addClass('colorat')
})
    $('#da2').click(function(){
    ans1 ++;
    console.log(ans1)
   
   $('#nu2').remove()
   $(this).addClass('colorat')
})
    $('#nu2').click(function(){
    ans1 =ans1-0;
    console.log(ans1)
    $('#da2').remove()
    $(this).addClass('colorat')
})
    $('#da3').click(function(){
    ans1 ++;
    console.log(ans1)
   
   $('#nu3').remove()
   $(this).addClass('colorat')
})
    $('#nu3').click(function(){
    ans1 =ans1-0;
    console.log(ans1)
    $('#da3').remove()
    $(this).addClass('colorat')
})
    $('#da4').click(function(){
    ans1 ++;
    console.log(ans1)
   
   $('#nu4').remove()
   $(this).addClass('colorat')
})
    $('#nu4').click(function(){
    ans1 =ans1-0;
    console.log(ans1)
    $('#da4').remove()
    $(this).addClass('colorat')
})
    $('#rasp').click(function(){
    $(this).remove()
        if (ans1==0) {
            $('#show').append('<div>Bravo, nu esti fumator!</div>')
            
        }
        if (ans1==1) {
            $('#show').append('<div>Nu esti inca fumator, esti doar unul pasiv!</div>')
            
        }
        if (ans1==2) {
            $('#show').append('<div>Esti un fumator care inca nu este dependent de tigari!</div>')
            
        }
        if (ans1==3) {
            $('#show').append('<div>Esti un fumator care incepe sa devina mai dependent de nicotina, oprestete acum!</div>')
            
        }
        if (ans1==4) {
            $('#show').append('<div>Esti fumator dependent de nicotina, oprestete cat mai repede poti!</div>')
            
        }
        if (ans1==5) {
            $('#show').append('<div>Esti fumator foarte dependent de nicotina, oprestete instant!</div>')
            
        }
        

    })



})




