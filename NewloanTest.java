package abcd;
// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchFrameException;

import java.util.*;
import java.util.concurrent.TimeUnit;
public class NewloanTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
	System.setProperty("webdriver.chrome.driver","C:\\Users\\himanshu.kakkar\\Downloads\\chromedriver_win32\\chromedriver.exe");
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  
  private void switchToFrame(String src) {
      List<WebElement> iframes = driver.findElements(By.tagName("iframe"));

      for (WebElement frame : iframes) {

          if (frame.getAttribute("src").trim().contains(src)) {
        	  driver.switchTo().frame(frame);
              break;
          }
      }
  }
  
  @Test
  public void newloan() {
    driver.get("http://192.168.168.98:8080/OceanviewWEB/ShowLogin.action?loginFail=true");
    driver.manage().window().setSize(new Dimension(1050, 708));
    driver.findElement(By.id("Login_username")).sendKeys("stonewain.support");
    driver.findElement(By.id("Login_password")).sendKeys("pearplanet");
    driver.findElement(By.id("Login_button")).click();
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    driver.switchTo().defaultContent();

    try {
      Thread.sleep(10000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    driver.findElement(By.id("ocv_Nav-Trading-Label")).click();
    driver.findElement(By.id("ocv_Nav-Trading-Menu-LoanEntry-Label")).click();
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    try
    {
    	switchToFrame("NewLoan?action=loanentryscreen");
    }
    catch(NoSuchFrameException e)
    {
    	System.out.println(e.getMessage());
    }
    //WebElement myDynamicElement = (new WebDriverWait(driver, 20)).until(ExpectedConditions.presenceOfElementLocated(By.id("yui_3_13_0_1_1560261650704_2347")));
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    driver.findElement(By.id("LoanEntryGrid-SearchForm-counterparty-input")).click();
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    driver.findElement(By.id("yui_3_13_0_1_1560261650704_2443")).click();
    {
      WebElement element = driver.findElement(By.id("o3-CommonAutoComplete"));
      Action builder = (Action) new Actions(driver);
      ((Actions) builder).moveToElement(element).release().perform();
    }
    try {
      Thread.sleep(20000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    driver.findElement(By.id("o3-CommonAutoComplete")).sendKeys("ibm");
    driver.findElement(By.id("yui_3_13_0_1_1560261650704_2748")).click();
    driver.findElement(By.id("FormGridRow-yui_3_13_0_1_1560261650704_1747-requestQuantity-input")).click();
    driver.findElement(By.id("FormGridRow-yui_3_13_0_1_1560261650704_1747-ros-input")).click();
    driver.findElement(By.id("yui_3_13_0_1_1560261650704_2871")).click();
    {
      WebElement element = driver.findElement(By.id("yui_3_13_0_1_1560261650704_1754"));
      Action builder = (Action) new Actions(driver);
      ((Actions) builder).moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.id("yui_3_13_0_1_1560261650704_1754"));
      Action builder = (Action) new Actions(driver);
      ((Actions) builder).moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.id("yui_3_13_0_1_1560261650704_1754"));
      Action builder = (Action) new Actions(driver);
      ((Actions) builder).moveToElement(element).release().perform();
    }
    driver.findElement(By.id("FormGridRow-yui_3_13_0_1_1560261650704_1747-price-input")).click();
    driver.findElement(By.id("yui_3_13_0_1_1560261650704_2956")).click();
    {
      WebElement element = driver.findElement(By.id("yui_3_13_0_1_1560261650704_1754"));
      Action builder = (Action) new Actions(driver);
      ((Actions) builder).moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.id("yui_3_13_0_1_1560261650704_1754"));
      Action builder = (Action) new Actions(driver);
      ((Actions) builder).moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.id("yui_3_13_0_1_1560261650704_1754"));
      Action builder = (Action) new Actions(driver);
      ((Actions) builder).moveToElement(element).release().perform();
    }
  }
}
