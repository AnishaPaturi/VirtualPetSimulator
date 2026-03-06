package enemy;

public abstract class Enemy {

    protected String name;
    protected int health;
    protected int strength;
    protected int xpReward;

    public Enemy(String name, int health, int strength, int xpReward) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xpReward = xpReward;
    }

    public int attack() {
        return strength;
    }

    public void takeDamage(int damage) {
        health -= damage;
    }

    public boolean isAlive() {
        return health > 0;
    }

    public int getXPReward() {
        return xpReward;
    }

    public String getName() {
        return name;
    }
}