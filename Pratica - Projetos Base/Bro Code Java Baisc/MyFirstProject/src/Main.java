import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.println("Hello " + name);

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println("You are " + age);

        System.out.print("What is your GPA: ");
        double gpa = scanner.nextDouble();

        System.out.println("Your GPA is " + gpa);

        System.out.print("Are you a student (true/false)? ");
        boolean isStudent = scanner.nextBoolean();

        if(isStudent) {
            System.out.println("You are enrolled as a student");
        } else {
            System.out.println("You are NOT enrolled");
        }

        // COMMON ISSUES

        System.out.print("Enter current day: ");
        int day = scanner.nextInt();
        scanner.nextLine();     // Fix: this method clean the scanner buffer for the next line

        System.out.print("Enter your favorite color: ");
        String color = scanner.nextLine();

        System.out.println("Today is day " + day);
        System.out.println("you like color " + color);

        /*
            The problem: Enter within the input buffer there´s
            still a new line character because we hit enter so
            the next line method is picking up that new line character
         */

        // Calculate area of rectangle

        double width = 0;
        double height = 0;
        double area = 0;

        System.out.print("Enter the width: ");
        width = scanner.nextDouble();

        System.out.print("Enter the height: ");
        height = scanner.nextDouble();

        area = width * height;

        System.out.println("The area of rectangle is: " + area + "cm²");

        scanner.close();
    }
}
