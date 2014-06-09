var TodoDomain = require('../domain/todoDomain');

var TodoDao = function() {
	this.$id = "todoDao";
	this.$domainDaoSupport = null;
	this.$init = "init";
}

TodoDao.prototype.setDomainDaoSupport = function($domainDaoSupport) {
	this.$domainDaoSupport = $domainDaoSupport;
}

TodoDao.prototype.getDomainDaoSupport = function() {
	return this.$domainDaoSupport;
}

TodoDao.prototype.init = function() {
	this.$domainDaoSupport.initConfig(TodoDomain);
}

TodoDao.prototype.transaction = function(txStatus) {
	this.$domainDaoSupport.transaction(txStatus);
	return this;
}

TodoDao.prototype.getList = function(params, cb) {
	var sql = ' 1=1 order by finished asc, id asc limit ?,?';
	return this.$domainDaoSupport.getListByWhere(sql, params, null, cb);
}

TodoDao.prototype.addTodo = function(params, cb) {
	var sql = 'insert into ' + this.$domainDaoSupport.getTableConfig().getTableName() + ' set title = ?, post_date = ?';
	return this.$domainDaoSupport.add(sql, params, cb);
}

TodoDao.prototype.getTodoById = function(id, cb) {
	return this.$domainDaoSupport.getById(id, cb);
}

TodoDao.prototype.updateTodo = function(title, id, cb) {
	var sql = 'update ' + this.$domainDaoSupport.getTableConfig().getTableName() + ' set title = ? where id = ?';
	return this.$domainDaoSupport.update(sql, [title, id], cb);
}

TodoDao.prototype.updateTodoFinished = function(finished, id, cb) {
	var sql = 'update ' + this.$domainDaoSupport.getTableConfig().getTableName() + ' set finished = ? where id = ?';
	return this.$domainDaoSupport.update(sql, [finished, id], cb);
}

TodoDao.prototype.deleteById = function(id, cb) {
	return this.$domainDaoSupport.deleteById(id, cb);
}

module.exports = TodoDao;

// module.exports = {
// 	id: "todoDao",
// 	func: TodoDao,
// 	props: [{
// 		name: "domainDaoSupport",
// 		ref: "domainDaoSupport"
// 	}],
// 	"init": "init"
// }