import items.Food;
import pet.Pet;

public class Owner {

    private String ownerName;
    private Pet pet;

    public Owner(String ownerName, Pet pet) {
        this.ownerName = ownerName;
        this.pet = pet;
    }

    public void feedPet(Food food) {
        System.out.println(ownerName + " feeds " + pet.name + " with " + food.getFoodName());
        pet.eat(food.getNutrition());
    }

    public void playWithPet(Activity activity) {
        System.out.println(ownerName + " plays " + activity.getActivityName() + " with " + pet.name);
        pet.play(activity.getEnergyCost(), activity.getHappinessBoost());
    }

    public void letPetSleep() {
        System.out.println(pet.name + " is sleeping...");
        pet.sleep();
    }

    public void showPetStatus() {
        pet.showStatus();
    }

    public Pet getPet() {
        return pet;
    }
}