const {qcmList, addQcm, getQcmList} = require('../models/in_memory');

function getQcmsJson(req, res) {
	return res.json(qcmList);
}

function getQcmId(req, res) {
	const id = req.params.id;
	const qcm = qcmList.find(qcm => qcm.id === parseInt(id));
	if (!qcm) {
		return res.status(404).send('Qcm not found');
	}
	return res.json(qcm);
}

function postQcm(req, res) {
	console.log(req.body);
	if (req.method === 'POST') {
		addQcm(req.body);
		return res.status(201);
	} else {
		console.log('Method not allowed');
		return res.status(405);
	}
	// res.send('Qcm added');
}

module.exports = {
	getQcmsJson,
	getQcmId,
	postQcm
}