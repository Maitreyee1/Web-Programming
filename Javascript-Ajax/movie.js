function loadData() {

	$.ajax({

		 url: "movies.xml",
		 dataType: "xml",
		 success: function(data) {
		        alert("file is loaded");
				$('#body').append('<table>');
				var table = "<table>"
				var castlist;
				table +='<tr><td>Title</td><td>Genre</td><td>Director</td><td>Cast</td><td>Short Description</td><td>IMDB Rating</td></tr>';
		        $(data).find('movie').each(function()
				{
					var title = $(this).find('title').text();
					var genre='';
                    $(this).find('genre').each(function(index) {
                                if(index==0)
                                {
                                    genre+=' '+$(this).text();
                                }
                                else
                                {
                                    genre+=','+$(this).text();

                                }
                               
                    });
					var director = $(this).find('director').text();
					var cast='';
					$(this).find('person').each(function(index){
								if(index==0)
                                {
									cast+=''+$(this).attr('name');
                                }
                                else
                                {
									cast+=','+$(this).attr('name');

                                }
						
					});					
					var synopsis= $(this).find('synopsis').text();
					var score = $(this).find('score').text();
				    table += '<tr><td>' + title + '</td><td>'+genre+'</td><td>' + director + '</td><td>'+cast+'</td><td>'+synopsis+'</td><td>' + score + '</td></tr>';
		        });
				table +="</table>"
				$("#body").append(table);


		 },
		 error: function() { alert("error loading file");  }
     });
}



	

