(function() {
    var mypage = Pages.mypage = new SMF.UI.Page({
        name: "page",
        onKeyPress: page_onKeyPress,
        onShow: page_onShow
    });
    
    	var passwordText = new SMF.UI.Label({
		top : "35%",
		left : "20%",
		height : "10%",
		width : "20%",
		text : "Password",
		adjustFontSizeToFit : true
	});
	mypage.add(passwordText);

    /**
     * Creates action(s) that are run when the user press the key of the devices.
     * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
     * @this Pages.page
     */
    function page_onKeyPress(e) {
        if (e.keyCode === 4) {
            Application.exit();
        }
    }

    /**
     * Creates action(s) that are run when the page is appeared
     * @param {EventArguments} e Returns some attributes about the specified functions
     * @this Pages.page
     */
    function page_onShow() {
        //type your here code
        alert('mypage displayed');
    }
})();
