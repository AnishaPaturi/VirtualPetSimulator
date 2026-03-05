package pet;

public abstract class Pet {

    protected String name;
    protected int health;
    protected int energy;
    protected int strength;
    protected int level;
    protected int experience;

    public Pet(String name) {
        this.name = name;
        this.health = 100;
        this.energy = 100;
        this.strength = 10;
        this.level = 1;
        this.experience = 0;
    }

    public void gainXP(int xp) {
        experience += xp;

        if (experience >= level * 50) {
            levelUp();
        }
    }

    private void levelUp() {
        level++;
        strength += 5;
        health = 100;
        energy = 100;

        System.out.println(name + " leveled up to level " + level + "!");
    }

    public void showStats() {
        System.out.println("\n---- PET STATS ----");
        System.out.println("Name: " + name);
        System.out.println("Level: " + level);
        System.out.println("XP: " + experience);
        System.out.println("Health: " + health);
        System.out.println("Energy: " + energy);
        System.out.println("Strength: " + strength);
    }

    public abstract void makeSound();

    public int attack() {
        return strength;
    }

    public void takeDamage(int damage) {
        health -= damage;
    }

    public boolean isAlive() {
        return health > 0;
    }

    public String getName() {
        return name;
    }
}