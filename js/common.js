$(document).ready(function() {
	    
    //main-side-bar  include.
    if($("#main_menu").length){
        $("#main_menu").load("../html/common/sidebar.html",function(){
            //side bar 
            $("#menu_open").bind("click", function(){
                $("#main_menu").addClass("active");
                $(".dimmed").show();
            });
            $("#menu_cls").bind("click", function(){
                $("#main_menu").removeClass("active");
                $(".dimmed").hide();
            });
            $(".dimmed").bind("click", function(){
                $("#main_menu").removeClass("active");
                $(".dimmed").hide();
            });
            $(".nav_wrapper > li").bind("click", function(){
                $("#main_menu").removeClass("active");
                $(".dimmed").hide();
            });
        });
    };

    //schedule header include.
    if($("header.sch").length){
        $("header.sch").load("../html/common/sch_header.html",function(){
            
            $("#menu_open").bind("click", function(){
                $("#main_menu").addClass("active");
                $(".dimmed").show();
            });
            $("#menu_cls").bind("click", function(){
                $("#main_menu").removeClass("active");
                $(".dimmed").hide();
            });
            $(".dimmed").bind("click", function(){
                $("#main_menu").removeClass("active");
                $(".dimmed").hide();
            });
            $(".nav_wrapper > li").bind("click", function(){
                $("#main_menu").removeClass("active");
                $(".dimmed").hide();
            });
           
            var h = $('header').outerHeight();
            $("#contents").css("padding-top", h + "px");
        });
    };

    ///schedule popup include.
    // if($(".skd_popup").length){
    //     $(".skd_popup").load("../../html/common/sch_popup.html",function(){
    //         // tab - common
    //         $(".tab_box > .tab").bind("click", function(){     
    //             $(this).parent().children(".tab").removeClass("active");
    //             $(this).addClass("active");
    //             var op_target = $(this).data("open");
    //             var cls_target = $(this).data("close");
    //             $("." + cls_target).hide();
    //             $("." + op_target).show();
    //         });
    //         //popup - common
    //         $(".popup_open").bind("click",function(){
    //             var op_target = $(this).data("open");
    //             $(".dimmed").show();
    //             $("." + op_target).show();
    //         });
    //         $(".popup_cls").bind("click",function(){
    //             var cls_target = $(this).data("close");
    //             $(".dimmed").hide();
    //             $("." + cls_target).hide();
    //         });
    //         $(".dimmed").bind("click", function(){
    //             $(".skd_popup").hide();
    //             $(".dimmed").hide();
    //         });
    //     });
    // };

    //schedule-side-bar  include.
    if($("#sch_menu").length){
        $("#sch_menu").load("../html/common/sch_sidebar.html",function(){
            //side bar 
            $("#sch_menu_btn").bind("click", function(){
                $("#sch_menu").addClass("active");
                $(".dimmed").show();
                $("#sch_menu_btn").hide();
            });
            $("#sch_menu_cls").bind("click", function(){
                $("#sch_menu").removeClass("active");
                $(".dimmed").hide();
                $("#sch_menu_btn").show();
            });
            $(".dimmed").bind("click", function(){
                $("#sch_menu").removeClass("active");
                $(".dimmed").hide();
                $("#sch_menu_btn").show();
            });
            $(".sch_nav_wrapper > li").bind("click", function(){
                $("#sch_menu").removeClass("active");
                $(".dimmed").hide();
                $("#sch_menu_btn").show();
            });
            $("#sch_menu .f_btn > li").bind("click", function(){
                $("#sch_menu").removeClass("active");
                $(".dimmed").hide();
                $("#sch_menu_btn").show();
            });
        });
    };


    // tab - common
    $(".tab_box > .tab").bind("click", function(){
        $(this).parent().children(".tab").removeClass("on");
        $(this).addClass("on");
        var op_target = $(this).data("open");
        var cls_target = $(this).data("close");
        $("." + cls_target).hide();
        $("." + op_target).show();
    });


    //popup - common
    $(".popup_open").bind("click",function(){
        var op_target = $(this).data("open");
        $(".dimmed").show();
        $("." + op_target).show();
        $("." + op_target).css("display","inline-block");

    });
    $(".popup_cls").bind("click",function(){
        var cls_target = $(this).data("close");
        $(".dimmed").hide();
        $("." + cls_target).hide();
    });

    //full popup 
    $(".full_popup_open").bind("click", function(){
        $(".full_popup").show();
    });

    $(".full_popup_cls").bind("click", function(){
        $(".full_popup").hide();
    });



    //common all check
    //-- notification, filebox
    var all_flg = false;
    $(".edit_btn_box .all_btn").bind("click",function(){
        var target = $(this).data("value");
        if(!all_flg){
            $("." + target + " .chkbox").children("input:checkbox").prop("checked", true);
            all_flg = true;
        }else{
            $("." + target + " .chkbox").children("input:checkbox").prop("checked", false);
            all_flg = false;
        }
    });


    //main-header --> contents padding-top value setting.
    if($('header').length && $("#contents").length){
        var h = $('header').outerHeight();
        //sub header..
        if( $(".sub_header").length ){
            var tab_h = $(".sub_header").outerHeight();
            $(".sub_header").css("top", h - 1 + "px");
            $("#contents").css("padding-top", h + tab_h + "px");
        } else {
            $("#contents").css("padding-top", h + "px");
        }
    }



    //common accordion 
    //-- service info page(meal info)
    $("li .more_icon").bind("click",function(){
        var target = $(this).parent().next("li");
        if( $(target).is(":visible") ){
            $(this).removeClass("open");
            $(target).slideUp("fast");
            $(this).parent().css("border-bottom","solid 1px #f7f7f7");
        } else {
            $(this).addClass("open");
            $(target).slideDown("fast");
            $(this).parent().css("border-bottom","none");
        }
    });

    
});
