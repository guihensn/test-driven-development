import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.assertEquals;


public class CalculatorTest {
    float firstNumber = 5;
    float secondNumber = 10;

    @BeforeClass
    public static void beforeEverything(){
        //Do something before the sequence of tests started
    }

    @Before
    public void beforeTests(){
        //Do something before each test.
    }

    @After
    public void afterTests(){
        //Do something after each test
    }

    @Test
    public void sum(){
        float expectedResult = 15;

        float result = Calculator.sum(firstNumber,secondNumber);
        assertEquals(expectedResult,result,0);
    }

    @Test
    public void subtract(){
        float expectedResult = -5;

        float result = Calculator.subtract(firstNumber,secondNumber);
        assertEquals(expectedResult,result,0);
    }

    @Test
    public void multiply(){
        float expectedResult = 50;

        float result = Calculator.multiply(firstNumber,secondNumber);
        assertEquals(expectedResult,result,0);
    }

    @Test
    public void divide(){
        float expectedResult = 0.5f;

        float result = Calculator.divide(firstNumber,secondNumber);
        assertEquals(expectedResult,result,0);
    }
}
