while (true) {
  if (d.orientation === "right") {
    var nextX = d.x + 1;
    var nextY = d.y;
  } else if (d.orientation === "left") {
    var nextX = d.x - 1;
    var nextY = d.y;
  } else if (d.orientation === "up") {
    var nextX = d.x;
    var nextY = d.y - 1;
  } else if (d.orientation === "down") {
    var nextX = d.x;
    var nextY = d.y + 1;
  }

  // if the next square is empty
  if (g.at(nextX, nextY) === 0) {
    d.move();
  } else {
    // if we're heading right, and we can go down
    if (d.orientation === "right" && g.at(d.x, d.y + 1) === 0) {
      d.orient("down");
    // if we're heading right, and we can go up
    } else if (d.orientation === "right" && g.at(d.x, d.y - 1) === 0) {
      d.orient("up");
    // if we're heading up or down, and we can go right
    } else if ((d.orientation === "down" || d.orientation == "up") && g.at(d.x + 1, d.y) === 0) {
      d.orient("right");
    }

    d.move();
  }
}