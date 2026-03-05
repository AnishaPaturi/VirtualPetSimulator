package save;

import pet.Pet;
import java.io.FileWriter;
import java.io.IOException;

public class SaveSystem {

    public static void savePet(Pet pet) {

        try {

            FileWriter writer = new FileWriter("pet_save.txt");

            writer.write(pet.getName() + "\n");

            writer.close();

            System.out.println("Game saved!");

        } catch (IOException e) {
            System.out.println("Save failed");
        }
    }
}