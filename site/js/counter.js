// Get the ul elements with the class "terms-list"
const termsLists = document.querySelectorAll(".terms-list");

// Count the number of li elements in each ul with class "terms-list"
let count = 0;
termsLists.forEach(list => {
  count += list.getElementsByTagName("li").length;
});

// Set the count as the text content of the span element with the id "counter"
document.getElementById("counter").textContent = count.toString();
