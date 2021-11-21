public final class Calculator {
    public static float sum(float  n1, float  n2){
        return n1 + n2;
    }

    public static float subtract(float  n1, float  n2){
        return n1 - n2;
    }

    public static float multiply(float  n1, float  n2){
        return n1*n2;
    }

    public static float divide(float n1, float n2){
        return n1-n2; //A bug to be detected by JUnit
    }

}
