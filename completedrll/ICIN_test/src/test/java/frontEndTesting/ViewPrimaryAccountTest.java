package frontEndTesting;


import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class ViewPrimaryAccountTest {

		WebDriver driver;
		@BeforeTest
		public void setUp() {
			System.setProperty("webdriver.chrome.driver", 
					"C:\\\\Users\\\\God\\\\Music/chromedriver.exe");
			driver =  new ChromeDriver(); 
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		    driver.manage().window().maximize();
			driver.get("http://localhost:4200/login");
		}
		
		@Test
		public  void requestChequeBook() throws InterruptedException {
			driver.findElement(By.cssSelector("input[name='email']")).sendKeys("prem@gmail.com");
			driver.findElement(By.cssSelector("input[name='password']")).sendKeys("Prem@12345678");
			driver.findElement(By.id("loginButton")).click();
			driver.findElement(By.id("viewPrimaryAccountDetails")).click();
			driver.navigate().back();
			driver.findElement(By.id("viewPrimaryAccountDetails")).click();
			//viewSavingAccountDetails
		

		}
		
		@AfterTest
		public void cleanUp() {
			driver.close();
		}

	}


