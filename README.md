# ivy-snackbar-challenge

## Introduction

For this take-home challenge, you’ll be coding an essential part of every web application - snackbars.  Snackbars are useful elements that display notifications to the end user.  Here’s an example of what they look like on the Ivy Clinicians web app.  They appear towards the bottom of the screen and disappear without any user interaction after a set period of time.

<img width="823" alt="Screen Shot 2022-11-23 at 7 06 25 PM" src="https://user-images.githubusercontent.com/26491362/203673700-9c821f1b-e81b-4752-b675-3d4575e9fbea.png">

We’ll be coding our own snackbar library from scratch.  You’ve likely used several different snackbar libraries at this point in your career.  Each has their own unique approach.  For our use case, we will create a React hook that can be called from any page in our React application like so.

```jsx
const Home = () => {
  const createSnackbar = useSnackbar();
  
  const handleClick = () => {
    createSnackbar('This is a notification.');
  };

  return (
    <div>
      <button onClick={handleClick} />
    </div>
  );
};
```

Once the button on this page is clicked, the `createSnackbar` function is called, which renders a `Snackbar` component on the page with the text “This is a notification.”  The `Snackbar` component then disappears after a bit on its own.

## Requirements

Here are the specific requirements that must be satisfied:

- Create a hook, `useSnackbar`, that returns a function to display a snackbar with a given text.
- The `useSnackbar` hook can be called from within any React component in our application.
- Snackbars should appear in the bottom left-hand corner of the viewport.
- Multiple snackbars can be displayed at the same time, ordered top to bottom by oldest to newest.
- Snackbars should disappear after 3 seconds.

You are free to style your snackbars however you wish.  Feel free to create any additional components necessary to make this hook work as intended.  You should not need to use any outside libraries.

## Submission

Create a private fork of the repository and clone it locally to your computer.  We ask you to create a private fork so that your solution is not shared publicly with other candidates.

In the project root, run `npm install` followed by `npm start`.  You should see the following page.

<img width="743" alt="Screen Shot 2022-11-23 at 7 46 22 PM" src="https://user-images.githubusercontent.com/26491362/203673795-7a322393-4917-4f7d-a518-7d74af460c4a.png">

Open up your web console in your browser.  When you click the button, you should see a new message logged in the console.  Your goal is to turn these console messages into snackbars as seen in the GIF below.

![Nov-23-2022 20-18-38](https://user-images.githubusercontent.com/26491362/203673824-f4cef2cc-6aeb-4da0-b2dc-33ef06620aa1.gif)

You will need to modify `snackbar.js` and `App.js`/`index.js` to achieve the proper functionality.  You should not need to modify `Home.js`.

When you've completed your solution, invite `mcsimps2` to your repository to view your solution.
