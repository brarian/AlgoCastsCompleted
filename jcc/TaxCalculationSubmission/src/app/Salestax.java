
import java.math.BigDecimal;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.ArrayList;

import java.io.BufferedReader;
import java.io.FileReader;

public class Salestax {
    public static void main(String[] args) throws Exception {

        BufferedReader bReader = new BufferedReader(new FileReader("input.txt"));
        ArrayList<String> recieptItems = new ArrayList<>();

        String item = bReader.readLine();
        while (item != null) {
            recieptItems.add(item);
            item = bReader.readLine();
        }

        bReader.close();
        String str;
        BigDecimal totalPrice = BigDecimal.ZERO;
        BigDecimal totalTaxes = BigDecimal.ZERO;

        for (String s : recieptItems) {
            str = s;

            BigDecimal quantity = numberOfItems(str);
            BigDecimal priceBeforeTax = pBeforeTax(str);
            BigDecimal singleItemTotal = quantity.multiply(
                    priceWithTax(pBeforeTax(str), nonExempt(str, priceBeforeTax), isImported(str, priceBeforeTax)));
            totalPrice = totalPrice.add(singleItemTotal);
            totalTaxes = totalTaxes.add(singleItemTotal.subtract(quantity.multiply(priceBeforeTax)));
            System.out.println(getItemName(str) + ": " + singleItemTotal);

        }
        System.out.println("Sales Taxes: " + totalTaxes);
        System.out.println("Total: " + totalPrice);
    }

    // number of each item purchased
    public static BigDecimal numberOfItems(String x) {
        BigDecimal result;
        result = new BigDecimal((x + " ").split(" ")[0]);
        return result;
    }

    // method to get pre tax price of item
    public static String beforeTaxPriceString(String x) {
        Pattern pattern = Pattern.compile("(?<= at ).*");
        Matcher m = pattern.matcher(x);
        String match = "";
        while (m.find()) {
            match = m.group();
        }
        return match;
    }

    // price before ou
    private static BigDecimal pBeforeTax(String str) {
        return new BigDecimal(beforeTaxPriceString(str));
    }

    // method to get item name
    public static String getItemName(String x) {
        Pattern pattern = Pattern.compile(".+?(?= at )");
        Matcher m = pattern.matcher(x);
        String itemName = "";
        while (m.find()) {
            itemName = m.group();
        }
        return itemName;
    }

    // calculate non exempt tax
    public static BigDecimal nonExempt(String s, BigDecimal x) {
        BigDecimal tax = BigDecimal.valueOf(.10);
        BigDecimal zero = BigDecimal.ZERO;
        if (s.contains("book") || s.contains("chocolate") || s.contains("pill")) {
            return zero;
        } else {
            return roundUp(x.multiply(tax));
        }
    }

    // calculate import tax
    public static BigDecimal isImported(String s, BigDecimal x) {
        BigDecimal tax = BigDecimal.valueOf(.05);
        BigDecimal zero = BigDecimal.ZERO;
        if (s.contains("imported")) {
            return roundUp(x.multiply(tax));
        } else {
            return zero;
        }
    }

    // calculate item price with all taxes included
    public static BigDecimal priceWithTax(BigDecimal a, BigDecimal b, BigDecimal c) {
        return a.add(b).add(c);
    }

    // rounding to nearest .05
    public static BigDecimal roundUp(BigDecimal taxToRound) {
        BigDecimal returnVal;
        double roundedTax = taxToRound.doubleValue();
        double doubleRounded = Math.round(roundedTax * 20) / 20.0;
        returnVal = BigDecimal.valueOf(doubleRounded);
        return returnVal;
    }
}