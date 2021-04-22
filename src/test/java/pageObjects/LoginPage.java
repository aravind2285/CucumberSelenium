package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	public WebDriver ldriver;
	
	public LoginPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
@FindBy(id="userName")
@CacheLookup
WebElement UN;

@FindBy(id="password")
@CacheLookup
WebElement txtPassword;

@FindBy(id="login")
@CacheLookup
WebElement btnLogin;

public void setUserName(String username) {
	UN.sendKeys(username);
}
public void setPassword(String pwd) {
	txtPassword.sendKeys(pwd);
}
public void clickLogin() {
	btnLogin.click();
}
}