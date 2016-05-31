(function($, doc) {		
      		$.init();
      		$.plusReady(function(){
      			$.ajax('http://v.juhe.cn/weather/index',{
      				data:{
      					cityname:'济南',
      					key:'7b4b4d850e69d156ad81162f70a8cfbf'
      				},
      				dataType:'json',
      				type:'get',
      				success:function(data){
      					console.log("成功!");
      					var sk = data.result.sk;
				        var today = data.result.today;
				        var futur = data.result.future;
				        var fut = "日期温度天气风向";
				        if(today){
				        	for (var i in futur) {
                				fut += "" + futur[i].date + ' , ' + futur[i].week + "" +  futur[i].temperature + "" + futur[i].weather + "" + futur[i].wind + "";
            				}
				        }
				        console.log(fut);
				        document.write(fut);
      				},
      				error:function(xhr,type,errorThrown){
      					console.log(type);
      				}
      			})
      		});
      	}(mui, document));	
