import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        var masses = readFile("input.txt");
        var total = process(masses);
        total.ifPresentOrElse(System.out::println, () -> System.out.println("error"));
    }

    static Optional<Integer> process(final List<Integer> masses) {
        return masses.stream().map(Main::calculateFuelCost).reduce(Integer::sum);
    }

    static int calculateFuelCost(final int moduleMass) {
         var fuelMass = (int)(Math.floor(moduleMass/3) - 2);
         if (fuelMass <= 6) return fuelMass;
         return fuelMass + calculateFuelCost(fuelMass);
    }

    static List<Integer> readFile(final String path) {
        File file = new File(path);
        var list = new ArrayList<Integer>();
        try {
            Scanner scan = new Scanner(file);
            while (scan.hasNextInt()) {
                list.add(scan.nextInt());
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return list;
    }
}
