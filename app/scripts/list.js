Goods.initial();
$( document ).ready(function() {
    $(".btn-xs").on( "click",function(){

        var $text = $(this).val();
        $number = $text ;
//        $number = $number + 1;
        $("#cart").text("购物车（"+$number+"）");
    });
});