## Requirements:

---

Your DJ color board will use smaller buttons to make your grid of four squares change colors.

This is a great time to practice CSS Grids. Create four squares in a two by two grid that will change color depending on where you are as a DJ. A master DJ will use 8 buttons.

Every level of advancement will use previous levels of requirements, and add to them.

You will have a parent component that will contain the four squares. This parent component's `state` will maintain a array of colors.

    ["white", "white", "white", "white"];

You can then render your squares like this:
    <Square color={colors[0]}/>
    <Square color={colors[1]}/>
    <Square color={colors[2]}/>
    <Square color={colors[3]}/>

Or better yet, write a `.map()` to render these.

---

### Small time DJ:

You will have one button that will change all four squares either black or white. White if the first one is not white. Black if the first square is white.

---

### Party DJ:

Add a second button. The second will turn the top half (both squares) of the grid purple.

---

### Professional DJ:

Add two more buttons, for a total of four. These next two will change the colors of the bottom squares blue, but individually. One will be linked to the bottom left, and the other to the bottom right.

---

### Big Time DJ:

Your next four buttons will each be linked to one of the squares. These buttons can have any effect on those squares that you wish.

---

### One of the Greats:

Your buttons will play sounds.

---

Here is a gif that shows what one solution could look like, there is a lot that you can do differently, but this is generally what it will look like when you are done.

![Alt text](https://coursework.vschool.io/content/images/2020/11/ezgif.com-gif-maker.gif)

**Notes for students and instructors:**

This assignment is designed for practice of state and props in React. It would make sense to require a couple of the requirements and have the rest be optional.

The more modularized this exercise is, the better practice it will be. The more components the better, even if it feels contrived.

You can do the dynamic styling with classes, but