$(function(){
	   $.ajax({
		url:"index.php?c=api&a=bloglist",
		type:"get",
		dataType:"json",
	success:function(res){
        var str="";
        for (var i = 0; i < res.result.data.lists.length; i++) {
            var str='<div class="xuanran"><ul class="timeline"><li><time class="time">'+res.result.data.lists.[i].createdate+'</time><div class="timeicon"></div><div class="tmlable"><h2><a href="#">'+res.result.data.lists.[i].title+'</a></h2><p><span class="blogpic"><a href="#"><img src="'+res.result.data.lists.[i].image+'" alt=""></a></span>'+res.result.data.lists.[i].content+'</p><p><a href="#" class="classname">原创个人博客模板</a><a href="#" class="readmore">阅读全文>></a></p><div class="tri"></div></div></li></ul></div>'
        };
        $(".xuanran").html(str);
        console.log(str)
	}
	error:function(res){	
	}
	})
})
 //     $.ajax({
	// 	url:"index.php?c=api&a=bloglist",
	// 	type:"get",
	// 	dataType:"json",
	// success:function(res){
 //        var str="";
 //        for (var i = 0; i < res.result.data.lists.length; i++) {
 //            var str='<div class="xuanran"><ul class="timeline"><li><time class="time">'+res.result.data.lists.[i].createdate+'</time><div class="timeicon"></div><div class="tmlable"><h2><a href="#">'+res.result.data.lists.[i].title+'</a></h2><p><span class="blogpic"><a href="#"><img src="'+res.result.data.lists.[i].image+'" alt=""></a></span>'+res.result.data.lists.[i].content+'</p><p><a href="#" class="classname">原创个人博客模板</a><a href="#" class="readmore">阅读全文>></a></p><div class="tri"></div></div></li></ul></div>'
 //        };
 //        $(".xuanran").html(str);
	// }
	// error:function(res){	
	// }
	// })