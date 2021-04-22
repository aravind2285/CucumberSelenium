package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
		features = ".//Features/Login.feature",
		glue = "stepDefinitions",
		dryRun=false,
		//monochrome = true,
		plugin= {"pretty", "html:testoutput"}
)
public class TestRunner {
public void teardown() {
	}	
}
