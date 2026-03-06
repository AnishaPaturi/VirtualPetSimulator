package Java;
import pet.*;
import battle.BattleSystem;
import inventory.Inventory;

import java.util.Random;
import java.util.Scanner;

public class GameManager {

    private Pet pet;
    private Inventory inventory;
    private Scanner scanner;
    private Random random;

    public GameManager(Pet pet) {
        this.pet = pet;
        this.inventory = new Inventory();
        this.scanner = new Scanner(System.in);
        this.random = new Random();
    }

    public void start() {

        while (true) {

            System.out.println("\n===== PET ADVENTURE =====");
            System.out.println("1 Explore");
            System.out.println("2 Battle");
            System.out.println("3 Pet Sound");
            System.out.println("4 Show Stats");
            System.out.println("5 Inventory");
            System.out.println("6 Exit");

            int choice = scanner.nextInt();

            switch (choice) {

                case 1:
                    explore();
                    break;

                case 2:
                    BattleSystem.fight(pet);
                    break;

                case 3:
                    pet.makeSound();
                    break;

                case 4:
                    pet.showStats();
                    break;

                case 5:
                    inventory.showInventory();
                    break;

                case 6:
                    return;
            }
        }
    }

    private void explore() {

        int event = random.nextInt(3);

        if (event == 0) {
            System.out.println("Your pet found food!");
            inventory.addItem("Apple");
        }

        else if (event == 1) {
            System.out.println("Enemy encountered!");
            BattleSystem.fight(pet);
        }

        else {
            System.out.println("Your pet discovered treasure!");
            inventory.addItem("Gold Coin");
        }
    }
}