// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-brown; icon-glyph: magic;
const widget = new ListWidget();

const chaselogo = await loadImage("YOUR BANK LOGO URL");
const rect = await loadImage("https://assets.codepen.io/4271835/rect.png");

// API Call
let auth = {
	client_id:"YOUR CLIENT_ID",
	secret:"YOUR SECRET",
	access_token:"YOUR ACCESS TOKEN"};
let t = "https://sandbox.plaid.com/accounts/balance/get";
let s = new Request(t);
	s.method = "POST";
	s.headers = {"Content-Type":"application/json"};
	s.body = JSON.stringify(auth);
let e = await s.loadJSON();
let a = "$"+ e.accounts[0].balances.current.toString();
let l = e.accounts[0].name.toString();
console.log(a);
console.log(l);

// Design
widget.setPadding(0,0,0,0);
widget.backgroundColor = new Color("#1c1c1d");

const stack1 = widget.addStack();
	stack1.layoutHorizontally();

		let label1 = stack1.addText("Bank Balance");
			label1.font = Font.systemFont(13);

			stack1.addSpacer(20);

		let bank_img = stack1.addImage(chaselogo);
			bank_img.imageSize = new Size(15,15);

const stack2 = widget.addStack();
	stack2.layoutVertically();

		let balancetxt = stack2.addText(a);
			balancetxt.font = Font.boldRoundedSystemFont(22);

		let accounttxt = stack2.addText(l);
			accounttxt.font = Font.systemFont(13);
			accounttxt.textColor = new Color("#95959c");

			stack2.addSpacer(10);

		let fillerimg = stack2.addImage(rect);
			fillerimg.imageSize = new Size(120,60);

// Show Widget

async function loadImage(imgUrl) {
		const req = new Request(imgUrl)
		return await req.loadImage()
}

Script.setWidget(widget);
Script.complete();
widget.presentSmall();