window.addEventListener("load", function(){
	var distance=0;
	var liLi=document.querySelectorAll(".controller li");
	var gallery=document.querySelector(".picture ul");
	var requestURL="data/img_path.json";
	var request=new XMLHttpRequest();
	var appendHtml="";

	function init(){
		setTimeout(function(){
			request.open("GET", requestURL, true);
			request.responseType="json";
			request.send();
			request.addEventListener("load", function(){
				var data=request.response;
				// console.log(data);

				for(key in data){
					// console.log(key+" : "+data[key]);
					// <li><img src="images/work1.jpg" alt=""></li>
					appendHtml+='<li><img src="images/'+data[key]+'" alt=""></li>'+'\n';
				}
				// console.log("appendHtml : "+appendHtml);
				gallery.innerHTML=appendHtml;

				for(var i=0; i<liLi.length; i++){
					liLi[i].index=i;

					liLi[i].addEventListener("click", function(e){
						e.preventDefault();

						for(var j=0; j<liLi.length; j++){
							liLi[j].classList.remove("on");
						}
						e.currentTarget.classList.add("on");

						var index=e.currentTarget.index;
						// console.log("index : "+index);

						distance=index*400*(-1);
						gallery.style.left=distance+"px";
					});
				}
			});
		}, 10);
	}
	init();
});