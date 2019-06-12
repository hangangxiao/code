$(document).ready(function(){
    $(".case").click(function(e){
        $(".case").addClass("checked");
        $(this).siblings(".case").removeClass("checked");
        if(e.delegateTarget.id == "senior"){
            $(".senior").show();
            $(".customized").hide()
        }else{
            $(".customized").show();
            $(".senior").hide()
        }
    });
    $("table tr td").click(function(){
        $("#mogoliaFrame,#mongolia").show(1,function(){
            $(".content").html("内容一，内容一")
        })
    });
    $("#close").click(function(){
        $("#mogoliaFrame,#mongolia").hide()
    })
});