package battle;

import pet.Pet;
import enemy.*;

import java.util.Random;

public class BattleSystem {

    public static void fight(Pet pet) {

        Enemy enemy = generateEnemy();

        System.out.println("\nA " + enemy.getName() + " appeared!");

        while (pet.isAlive() && enemy.isAlive()) {

            int petDamage = pet.attack();
            enemy.takeDamage(petDamage);

            System.out.println(pet.getName() + " deals " + petDamage + " damage");

            if (!enemy.isAlive())
                break;

            int enemyDamage = enemy.attack();
            pet.takeDamage(enemyDamage);

            System.out.println(enemy.getName() + " deals " + enemyDamage + " damage");
        }

        if (pet.isAlive()) {
            System.out.println("You defeated " + enemy.getName());
            pet.gainXP(enemy.getXPReward());
        } else {
            System.out.println("Your pet fainted...");
        }
    }

    private static Enemy generateEnemy() {

        Random random = new Random();
        int r = random.nextInt(4);

        switch (r) {
            case 0: return new Wolf();
            case 1: return new Goblin();
            case 2: return new Snake();
            default: return new DragonBoss();
        }
    }
}