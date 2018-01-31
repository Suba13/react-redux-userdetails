public class EqualElements {

    public static void consecutiveEqualElements(int[] elements) {

            // Saves the maximal number of consecutive number with the
            // same numeric value
            int occurances = 0;

            // Counts how many numbers with the same value stands right
            // behind each other
            int count = 1;

            // Run from the second index because of the in the body following
            // if-clause
            for (int index = 1; index < elements.length; index++) {

                    // In case the current and the previous element
                    // have the same numeric value
                    if (elements[index] == elements[index - 1]) {
                            // Increase the count (which is initialised with 1)
                            // And save the maximal number of consecutive numbers
                            // with the same value in occurances
                            count++;
                            occurances = Math.max(occurances, count);
                    } else {
                         // If the two numbers differ, reset the counter
                         count = 1;

                    }
             }
             System.out.println(occurances);

}

public static void main(String[] args) {
	String s="PHOTTONT";
    char a[]=s.toCharArray();


    consecutiveEqualElements(a);
}
}