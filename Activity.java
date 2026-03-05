public class Activity {

    private String activityName;
    private int energyCost;
    private int happinessBoost;

    public Activity(String activityName, int energyCost, int happinessBoost) {
        this.activityName = activityName;
        this.energyCost = energyCost;
        this.happinessBoost = happinessBoost;
    }

    public int getEnergyCost() {
        return energyCost;
    }

    public int getHappinessBoost() {
        return happinessBoost;
    }

    public String getActivityName() {
        return activityName;
    }
}