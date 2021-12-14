package uk.co.library.pages;

import com.aventstack.extentreports.Status;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import org.testng.asserts.SoftAssert;
import uk.co.library.utility.Utility;

import java.util.List;

/**
 * By Dimple Patel
 **/
public class ResultPage extends Utility
{
    SoftAssert softAssert=new SoftAssert();
    public ResultPage()
    {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(className = "search-header__title")
    List<WebElement> resultTxt;
    public void verifyTheResults(String expected)
    {
        for(WebElement message: resultTxt)
        {
            softAssert.assertEquals(message.getText(),expected);
            System.out.println(message.getText());
        }
        softAssert.assertAll();
    }
}
