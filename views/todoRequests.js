import {connect} from "../configMySql.js"

connect.connect(err => {
	if (err) {
		console.error(err)
	} else {
		console.log("connect DB")
	}
})

export const getTodo = (req, res) => {
	connect.query('SELECT * FROM todolist', (err, result) => (
		!err ? res.json(result) : res.json(err)
	))
}

export const sendTodo = (req, res) => {
	let data = [
		req.body.id,
		req.body.task,
		req.body.isDone
	]

	connect.query("INSERT INTO `todolist`(`id`, `task`, `isDone`) VALUES (?,?,?)", data, () => {
		console.log("Items send")
	})
}

export const deleteTodo = (req, res) => {
	connect.query(`DELETE FROM todolist WHERE id = ?`, req.params.id, () => {
		console.log("Items deleted")
	})
}

export const updateTodo = (req, res) => {
	let data = [
		req.body.task,
		req.body.id
	]

	connect.query("UPDATE `todolist` SET `task`=? WHERE id=?;", data, () => {
		console.log("Items updated")
	})
}