/*
HOMEWORK 2
by Maitreyee Mhasakar
NET ID: mam171630
*/
$(document).ready(function()
{
    $.getJSON("js/data.json", function(result){
		$.each(result, function(key, value){
			$(".gallery").append('<li><img class="pictures" src="images/square/'+value.path+'" alt="'+value.title+'" /></li>');
			$("img").mouseenter(function(even)
			{
				$(this).addClass('gray');
				var x =even.pageX+70;
				var y =even.pageY+70;
				if($(this).attr("alt")==value.title)
					{
						$('#preview').css("display","block");
						$('#preview').css("left",x);
						$('#preview').css("top",y);
						$('#preview').css("z-index",10);

						$("body").prepend('<div id="preview"><img src="images/medium/'+value.path+'"/><br><p>'+value.title+'   '+value.city+'   '+value.country+'   '+value.taken+'</p></div>');
					}

			
			});
			$("img").mousemove(function(even){
				var x =even.pageX+70;
				var y =even.pageY+70;
				$('#preview').css("display","block");
				$('#preview').css("left",x);
				$('#preview').css("top",y);
				$('#preview').css("z-index",10);



				
			});
			
			
			
			
			$("img").mouseleave(function(){
				$(this).removeClass('gray');
				$("#preview").remove();
			});
			
        });
    });
	

});
