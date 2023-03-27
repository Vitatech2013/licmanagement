const express = require('express')
const app = express()
app.listen(3000, () => console.log(`Example app listening on port 3000!`))

app.get('/home', loadStudentsHtml);
app.get('/admin', Adminn);
app.get('/adminpage', adminView);

app.get('/admin/addingpolicy', Addpolicy);
app.get('/admin/addingagent', AddAgentt);
app.get('/admin/viewagent', ViewAgeDetails);
app.get('/admin/viewpolicys', ViewpolicyDetails);

app.get('/admin/ChangePassword',AdminPassword);

app.get('/agentPage', loginView);
app.get('/loginpage', loginnn);
app.get('/agent/addingcustomer', AddCustomer);
app.get('/agent/customerprofile', ViewProfile);
app.get('/agent/viewcustomers', ViewCustomer);
app.get('/agent/viewpolicys', ViewPolicysDetails);
app.get('/agent/payment', Payments);
app.get('/agent/paymendetails', FeePaymentDetals);
app.get('/agent/ChangePassword',AgentPassword);

function loadStudentsHtml(req, res) {
	console.log(__dirname);
	res.sendFile('home.html', { root: __dirname });
}
function Adminn(req, res) {
	res.sendFile('adminlogin.html', { root: __dirname });
}

function adminView(req, res) {
	res.sendFile("Admin/adminpage.html", { root: __dirname });
}

function AddAgentt(req, res) {
	res.sendFile("Admin/addagent.html", { root: __dirname });
}

function Addpolicy(req, res) {
	res.sendFile("Admin/addpolicy.html", { root: __dirname });
}

function ViewAgeDetails(req, res) {
	res.sendFile("Admin/viewagentDetails.html", { root: __dirname });
}

function ViewpolicyDetails(req, res) {
	res.sendFile("Admin/viewpolicy.html", { root: __dirname });
}

function AdminPassword(req, res) {
	res.sendFile("Admin/ChangePassword.html", { root: __dirname });
}

function loginnn(req, res) {
	res.sendFile('agentlogin.html', { root: __dirname });
}

function loginView(req, res) {
	res.sendFile("User/userpage.html", { root: __dirname });
}

function AddCustomer(req, res) {
	res.sendFile("User/addcustomer.html", { root: __dirname });
}

function ViewProfile(req, res) {
	res.sendFile("User/viewprofile.html", { root: __dirname });
}

function ViewCustomer(req, res) {
	res.sendFile("User/viewcustom.html", { root: __dirname });
}

function ViewPolicysDetails(req, res) {
	res.sendFile("User/viewpolicy.html", { root: __dirname });
}

function Payments(req, res) {
	res.sendFile("User/payment.html", { root: __dirname });
}

function FeePaymentDetals(req, res) {
	res.sendFile("User/paymentdetails.html", { root: __dirname });
}

function AgentPassword(req, res) {
	res.sendFile("User/ChangePassword.html", { root: __dirname });
}