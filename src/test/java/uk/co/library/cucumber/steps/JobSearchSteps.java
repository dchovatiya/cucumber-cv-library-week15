package uk.co.library.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

/**
 * By Dimple Patel
 **/
public class JobSearchSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage()
    {
        System.out.println("I am on home page");
    }

    @When("^I click on search more options$")
    public void iClickOnSearchMoreOptions()
    {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle)
    {
        new HomePage().enterJobTitle(jobTitle);
    }

    @And("^I enter location \"([^\"]*)\"$")
    public void iEnterLocation(String location)
    {
        new HomePage().enterLocation(location);
    }

    @And("^I enter distance \"([^\"]*)\"$")
    public void iEnterDistance(String distance)
    {
        new HomePage().selectDistance(distance);
    }

    @And("^I enter salary minimum \"([^\"]*)\"$")
    public void iEnterSalaryMinimum(String salaryMin )
    {
        new HomePage().enterMinSalary(salaryMin);
    }

    @And("^I enter salary maximum \"([^\"]*)\"$")
    public void iEnterSalaryMaximum(String salaryMax)
    {
        new HomePage().enterMaxSalary(salaryMax);
    }

    @And("^I select salary type \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType)
    {
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I select job type \"([^\"]*)\"$")
    public void iSelectJobType(String jobType)
    {
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on find jobs button$")
    public void iClickOnFindJobsButton()
    {
        new HomePage().clickOnFindJobsButton();
    }
    @Then("^I should be able to verify the result message \"([^\"]*)\"$")
    public void iShouldBeAbleToVerifyTheResultMessage(String expected )
    {
        new ResultPage().verifyTheResults(expected);
    }

    @And("^I accept cookies$")
    public void iAcceptCookies()
    {
        new HomePage().setAcceptCookies();
    }
}
