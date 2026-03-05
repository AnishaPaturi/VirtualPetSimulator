import java.util.Scanner;

public class GameManager {

    private Owner owner;
    private Scanner scanner;

    public GameManager(Owner owner) {
        this.owner = owner;
        scanner = new Scanner(System.in);
    }

    public void startGame() {

        while (true) {

            System.out.println("\n===== Virtual Pet Menu =====");
            System.out.println("1. Feed Pet");
            System.out.println("2. Play With Pet");
            System.out.println("3. Let Pet Sleep");
            System.out.println("4. Pet Sound");
            System.out.println("5. Show Status");
            System.out.println("6. Exit");

            int choice = scanner.nextInt();

            switch (choice) {

                case 1:
                    Food food = new Food("Meat", 20);
                    owner.feedPet(food);
                    break;

                case 2:
                    Activity activity = new Activity("Fetch", 10, 20);
                    owner.playWithPet(activity);
                    break;

                case 3:
                    owner.letPetSleep();
                    break;

                case 4:
                    owner.getPet().makeSound();
                    break;

                case 5:
                    owner.showPetStatus();
                    break;

                case 6:
                    System.out.println("Goodbye!");
                    return;

                default:
                    System.out.println("Invalid choice");
            }
        }
    }
}