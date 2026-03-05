import java.util.Scanner;

import pet.Cat;
import pet.Dog;
import pet.Pet;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Owner Name:");
        String ownerName = scanner.nextLine();

        System.out.println("Choose Pet Type:");
        System.out.println("1. Dog");
        System.out.println("2. Cat");

        int choice = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Enter Pet Name:");
        String petName = scanner.nextLine();

        Pet pet;

        if (choice == 1) {
            pet = new Dog(petName);
        } else {
            pet = new Cat(petName);
        }

        Owner owner = new Owner(ownerName, pet);

        GameManager game = new GameManager(owner);
        game.startGame();
    }
}