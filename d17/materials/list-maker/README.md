### Bonus

When you click on a list item, it is removed

HINT:

You cannot use $("li").on("click") because the `li`s are not on the page yet. You have to listen to its parent:

```javascript
$("ul").on("click", function(event) {
  // $(event.target) is the li that was clicked
  // Whereas $(this) is the ul
});