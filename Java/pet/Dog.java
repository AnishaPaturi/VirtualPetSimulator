package pet;

public class Dog extends Pet {

    public Dog(String name) {
        super(name);
        strength = 12;
    }

    @Override
    public void makeSound() {
        System.out.println(name + " barks loudly!");
    }
}