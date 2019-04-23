$(function(){

	$.ajax({
	method:'GET',
	url:'api/videos',
	success:function(videos){
		$.each(videos,function(i,video){
			$("#videolist").append('<li><img style="width:200px; height:200px;" src="../images/'+video._id+'.jpg">'+video.title+'</li>')
		});
	},
	error:function(){
		alert("Error loading videos");
	}


	});

	$('#add').click(function(){

				var vtitle=$("#title").val();
				console.log(vtitle);
				var vgenre=$("#genre").val();
				var vdesc=$("#desc").val();
				var video={
					title: vtitle,
					genre: vgenre,
					description: vdesc
				}



			$.ajax({
			method:'POST',
			url:'api/videos',
			data:video,
			success:function(videos){
				$.each(videos,function(newvideo){
					$("#videolist").append('<li>'+newvideo.title+'</li>')
				});
			},
			error:function(){
				alert("Error loading videos");
			}


			});








	});


});