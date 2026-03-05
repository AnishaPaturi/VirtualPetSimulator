public class Food {

    private String foodName;
    private int nutrition;

    public Food(String foodName, int nutrition) {
        this.foodName = foodName;
        this.nutrition = nutrition;
    }

    public int getNutrition() {
        return nutrition;
    }

    public String getFoodName() {
        return foodName;
    }
}