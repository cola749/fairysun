/**
 * Created by Greg on 2016/11/21.
 */
(function(win,doc){
	function change(){
		doc.documentElement.style.fontSize=doc.documentElement.clientWidth/50+'px';
	};
	win.addEventListener('resize',change,false)
	change();
})(window,document)










