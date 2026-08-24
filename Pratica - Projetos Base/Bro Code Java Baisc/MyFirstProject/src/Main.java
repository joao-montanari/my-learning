public class Main {
    public static void main(String[] args) {

        // ✅ variable = a reusable container for a value
        //               a variable behaves as if it was the value it contains

        // 🔴 Primitive = simple value stored directly in memory (stack)
        // 🔵 Reference = memory address (stack) that points to the (heap)

        // 🔴 Primitive vs 🔵 Reference
        //    ---------        --------
        //    int              string
        //    double           array
        //    char             object
        //    boolean

        // 2. Steps to creating a variable
        // -------------------------------
        // 1. declaration
        // 2. assignment

        int age = 23;
        int year = 2026;

        double height = 1.75;
        double pi = 3.14;
        double temperature = -80;

        char symbol = '#';
        char firstWordName = 'C';

        boolean isStudent = true;
        boolean isOnline = false;

        String name = "Bro Code";
        String food = "Pizza";

        System.out.println("Age: " + age);
        System.out.println("The year is: " + year);

        System.out.println("Height: " + height);
        System.out.println("PI: " + pi);

        System.out.println("Temperature: " + temperature);
        System.out.println("My first word Name: " + firstWordName);

        System.out.println("she is a student? " + isStudent);
        System.out.println("He is online? " + isOnline);

        System.out.println("Name: " + name);
        System.out.println("My favorite food is: " + food);

        if(isStudent) {
            System.out.println("She is a student!!!");
        } else {
            System.out.println("She is not a student");
        }

        System.out.println("concat vars infos: " + name + " has " + age + " year old, and he love eat " + food);
    }
}
