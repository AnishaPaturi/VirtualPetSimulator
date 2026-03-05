package inventory;

import java.util.ArrayList;

public class Inventory {

    private ArrayList<String> items;

    public Inventory() {
        items = new ArrayList<>();
    }

    public void addItem(String item) {
        items.add(item);
        System.out.println(item + " added to inventory");
    }

    public void showInventory() {
        System.out.println("\nInventory:");

        if (items.isEmpty()) {
            System.out.println("Empty");
            return;
        }

        for (String item : items) {
            System.out.println("- " + item);
        }
    }
}