package Java;
import pet.*;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Choose Pet:");
        System.out.println("1 Dog");
        System.out.println("2 Cat");

        int choice = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Enter pet name:");
        String name = scanner.nextLine();

        Pet pet;

        if (choice == 1)
            pet = new Dog(name);
        else
            pet = new Cat(name);

        GameManager game = new GameManager(pet);

        game.start();
    }
}