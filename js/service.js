(function(angular){
	//创建服务
	var app = angular.module('todos.service',[]);

	//第一个参数：也是一个名字
	//第二个参数：类似于控制器的第二个
	//第二个参数主要是因为没有依赖注入任何其他东西，所以只有一个回调函数，大家也可以不用数组来写
	app.service('Todos',[function(){
		this.name = '小明';
	}]);
})(angular);
