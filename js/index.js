				var a = 10;
				//判断滚动条是否到底部
				$("ul").scroll(function() {
					var $this = $(this),
						viewH = $(this).height(), //可见高度  
						contentH = $(this).get(0).scrollHeight, //内容高度  
						scrollTop = $(this).scrollTop(); //滚动高度  
						console.log(scrollTop);
					if(contentH - viewH - scrollTop <= 0) { //判断滚动条是否到达底部,加载新内容  
						var dataItem = "";
						for(var i = 0; i<5;i++){
							a++;
							dataItem += "<li  onclick = 'leaveItemClick(this)'>"+a+"</li>"	
						}
						$("ul").append(dataItem);
					}
				});
				//下拉刷新
				
				function leaveItemClick(event){
					var item = $(event).html();
					alert(item);
				}