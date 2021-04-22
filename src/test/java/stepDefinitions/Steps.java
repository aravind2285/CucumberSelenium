package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.*;
import pageObjects.LoginPage;

public class Steps {

	public WebDriver driver;
	public LoginPage lp;
	
	@Given("^user Launch chrome browser$")
	public void user_Launch_chrome_browser(){
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		lp = new LoginPage(driver);
	}

	@When("^user opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url){
		driver.get("https://yonobusiness.sbi/login/yonobusinesslogin");
	}

	@When("^user enters email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_email_as_and_Password_as(String username, String password){
		
		lp.setUserName(username);
		lp.setPassword(password);	    
	}
	@And("^click on Login button$")
	public void click_on_Login_button(){
		lp.clickLogin();	    
	}
	@And("^I close browser$")
	public void I_close_browser(){
		driver.close();
		driver.quit();
	}
}