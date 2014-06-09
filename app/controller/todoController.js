var TodoController = function() {
	this.$id = "todoController";
	this.$todoService = null;
}

TodoController.prototype.index = function(req, res, next) {
	this.$todoService.getList([0, 50], function(err, results) {
		if (err) {
			console.log(err);
			return;
		}
		res.render('index.html', {
			todos: results
		});
	});
}

TodoController.prototype.new = function(req, res, next) {
	var title = req.body.title || '';
	title = title.trim();
	if (!title) {
		return res.render('error.html', {
			message: '标题是必须的'
		});
	}
	this.$todoService.addTodo([title, Date.now()], function(err, result) {
		if (err) {
			return next(err);
		}
		res.redirect('/');
	})
}

TodoController.prototype.view = function(req, res, next) {
	res.redirect('/');
}

TodoController.prototype.edit = function(req, res, next) {
	var id = req.params.id;
	this.$todoService.getTodoById(id, function(err, result) {
		if (err) {
			return next(err);
		}

		if (!result) {
			return next();
		}

		result = result[0];
		res.render('todo/edit.html', {
			todo: result
		});
	});
}

TodoController.prototype.save = function(req, res, next) {
	var id = req.params.id;
	var title = req.body.title || '';
	title = title.trim();
	if (!title) {
		return res.render('error.html', {
			message: '标题是必须的'
		});
	}

	this.$todoService.updateTodo(title, id, function(err, result) {
		if (err) {
			return next(err);
		}
		res.redirect('/');
	});
}

TodoController.prototype.delete = function(req, res, next) {
	var id = req.params.id;

	this.$todoService.deleteById(id, function(err, result) {
		if (err) {
			return next(err);
		}
		res.redirect('/');
	});
}

TodoController.prototype.finish = function(req, res, next) {
	var finished = req.query.status === 'yes' ? 1 : 0;
	var id = req.params.id;

	this.$todoService.updateTodoFinished(finished, id, function(err, result) {
		if (err) {
			return next(err);
		}
		res.redirect('/');
	});
}

module.exports = TodoController;

// module.exports = {
// 	id: "todoController",
// 	func: TodoController,
// 	props: [{
// 		name: "todoService",
// 		ref: "todoService"
// 	}]
// }