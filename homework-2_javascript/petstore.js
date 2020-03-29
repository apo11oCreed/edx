/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 *              each week
 * @return the total amount of pet food that should be ordered for the upcoming
 *               week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!
    Number(numAnimals);
    Number(avgFood);
    if (isNaN(numAnimals) || isNaN(avgFood)) {
        return -1;
    } else if (numAnimals < 0 || avgFood < 0) {
        return -1;
    } else {
        return numAnimals * avgFood;
    }
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */

function Weekday(name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

var Sunday = new Weekday('Sunday', 6),
    Monday = new Weekday('Monday', 3),
    Tuesday = new Weekday('Tuesday', 10),
    Wednesday = new Weekday('Wednesday', 5),
    Thursday = new Weekday('Thursday', 8),
    Friday = new Weekday('Friday', 10),
    Saturday = new Weekday('Saturday', 7),
    weekDays = [];

weekDays.push(Sunday);
weekDays.push(Monday);
weekDays.push(Tuesday);
weekDays.push(Wednesday);
weekDays.push(Thursday);
weekDays.push(Friday);
weekDays.push(Saturday);

function mostPopularDays(week) {
    largestNumbers = [];
    if (week == null || week.length == 0) {
        return null;
    } else {
        for (var i = 0; i < week.length; i++) {
            var largestNumber = [];
            for (var j = 0; j < week.length; j++) {
                if (Number(week[i].traffic) < Number(week[j].traffic)) {
                    largestNumber.push('less than');
                }
            }
            if (largestNumber.length < 1) {
                largestNumbers.push(week[i].name);
            }
        }
        if (largestNumbers.length > 1) {
            return largestNumbers;
        } else {
            return largestNumbers[0].toString();
        }
    }
}
mostPopularDays(weekDays);


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */

var array1 = ["jon", "tom", "jack"],
    array2 = ["dog", "cat", "bird"],
    array3 = ["hound", "tom", "parrot"];

function createAnimalObjects(names, types, breeds) {
    var animalObjectsArray = [];

    if (names == null) {
        return animalObjectsArray;
    } else if (types == null) {
        return animalObjectsArray;
    } else if (breeds == null) {
        return animalObjectsArray;
    } else {
        var standardLength = names.length;

        if (types.length != standardLength || breeds.length != standardLength) {
            return animalObjectsArray;
        } else if (names.length == 0 || types.length == 0 || breeds.length == 0) {
            return animalObjectsArray;
        } else {
            for (var i = 0; i < names.length; i++) {
                var animalName = names[i],
                    animalType = types[i],
                    animalBreed = breeds[i],
                    animal;

                animal = new Animal(animalName, animalType, animalBreed);
                animalObjectsArray.push(animal);
            }
            return animalObjectsArray;
        }
    }
}

console.log(createAnimalObjects(array1, array2, array3));

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday(name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item(name, barcode, sellingPrice, buyingPrice) {
    this.name = name;
    this.barcode = barcode;
    this.sellingPrice = sellingPrice;
    this.buyingPrice = buyingPrice;
}
/**
 * A prototype to create Animal objects
 */
function Animal(name, type, breed) {
    this.name = name;
    this.type = type;
    this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}