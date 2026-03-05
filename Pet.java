public abstract class Pet {

    protected String name;
    protected int hunger;
    protected int happiness;
    protected int energy;
    protected int health;

    public Pet(String name) {
        this.name = name;
        hunger = 50;
        happiness = 50;
        energy = 50;
        health = 100;
    }

    public void eat(int foodValue) {
        hunger -= foodValue;
        if (hunger < 0) hunger = 0;

        happiness += 5;
        if (happiness > 100) happiness = 100;
    }

    public void sleep() {
        energy += 30;
        if (energy > 100) energy = 100;

        hunger += 10;
    }

    public void play(int energyCost, int happinessBoost) {
        energy -= energyCost;
        happiness += happinessBoost;

        if (energy < 0) energy = 0;
        if (happiness > 100) happiness = 100;
    }

    public void showStatus() {
        System.out.println("\nPet: " + name);
        System.out.println("Hunger: " + hunger);
        System.out.println("Happiness: " + happiness);
        System.out.println("Energy: " + energy);
        System.out.println("Health: " + health);
    }

    public abstract void makeSound();
}