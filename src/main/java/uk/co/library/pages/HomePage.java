package uk.co.library.pages;

import com.aventstack.extentreports.Status;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.utility.Utility;

/**
 * By Dimple Patel
 **/
public class HomePage extends Utility
{
    public HomePage() {
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath ="//input[@id='keywords']")//send job title
    WebElement jobTitle;
    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")//send job location
    WebElement location;
    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")//select distance
    WebElement distanceDropDown;
    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;
    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;
    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;
    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;
    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;
    @CacheLookup
    //@FindBy(xpath = "//input[@id='hp-search-btn']")
    @FindBy(xpath ="//input[contains(@id,'hp-search-btn')]")
    WebElement findJobsBtn;
    @CacheLookup
    @FindBy(xpath = "//span//div//span[normalize-space()='Accept All']")
    WebElement acceptCookies;
    @CacheLookup
    @FindBy(id ="gdpr-consent-notice")
    WebElement iframe;

    public void enterJobTitle(String jobTit){
        sendTextToElement(jobTitle, jobTit);

    }
    public void enterLocation(String Location){
        sendTextToElement(location, Location);

    }
    public void selectDistance(String distance){
        selectByVisibleTextFromDropDown(distanceDropDown, distance);

    }
    public void clickOnMoreSearchOptionLink(){
        clickOnElement(moreSearchOptionsLink);

    }
    public void enterMinSalary(String minSalary){
        sendTextToElement(salaryMin, minSalary);

    }
    public void enterMaxSalary(String maxSalary)
    {
        sendTextToElement(salaryMax,maxSalary);
    }
    public void selectSalaryType(String sType){
        selectByVisibleTextFromDropDown(salaryTypeDropDown,sType);
    }
    public void selectJobType(String jobType){
        selectByVisibleTextFromDropDown(jobTypeDropDown,jobType);
    }
    public void clickOnFindJobsButton()
    {
        findJobsBtn.submit();
    }
    public void setAcceptCookies()
    {
        switchToIframe(iframe);
        clickOnElement(acceptCookies);
        driver.switchTo().defaultContent();
    }
}
