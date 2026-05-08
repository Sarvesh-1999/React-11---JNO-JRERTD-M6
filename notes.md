# **What is ReactJS?**

ReactJS (or simply React) is a free, open-source JavaScript library primarily used for building dynamic, interactive user interfaces (UIs), particularly for Single Page Applications (SPAs). It was developed and is maintained by Meta (formerly Facebook). Instead of treating the whole web page as a single block, React allows you to break it down into smaller, manageable, and reusable pieces of code.

---

### **Why do we need React?**

Before React, building complex web applications with plain JavaScript (Vanilla JS) or jQuery required heavy, direct manipulation of the Document Object Model (DOM). This was slow, buggy, and hard to maintain as apps grew larger. We use React because it solves these problems:

- **Speed and Performance:** Updating the entire web page for a tiny change is slow. React uses a smart mechanism to only update the exact parts of the screen that changed.
- **Reusability:** You can build a UI element once (like a custom button or a navigation bar) and reuse it anywhere in your app, saving time and reducing bugs.
- **Easier Maintenance:** Because the code is modular, fixing a bug in one part of the app usually doesn't break the rest of it.
- **Seamless User Experience:** React powers Single Page Applications, meaning the app loads once, and navigating around feels instantaneous, like a native mobile app, without the browser having to reload the page.

---

### **Key Features of React**

- **JSX (JavaScript XML):** A syntax extension that allows you to write HTML-like code directly inside your JavaScript files. It makes the code incredibly easy to read and write.
- **Virtual DOM:** React keeps a lightweight, in-memory copy of the actual DOM (the website's structure). When a user interacts with the app, React updates the Virtual DOM first, compares it to the real DOM to figure out exactly what changed, and then updates _only_ those specific pieces on the actual screen.
- **One-Way Data Binding:** Data in React flows in a single direction (from parent components down to child components). This makes it much easier to track down bugs and understand how data is moving through your app.
- **Component-Based Architecture:** The entire UI is divided into self-contained building blocks.

---

# **FOLDER STRUCTURE**

When you create a new React project using Vite (a modern, incredibly fast build tool), the folder structure looks a bit different than older tools like Create React App. The most notable difference is that Vite treats `index.html` as part of your source code, not just a static asset.

Here is what a standard React + Vite folder structure looks like, followed by a breakdown of what each part does:

```text
my-react-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

---

### **1. The Root Folders**

- **`node_modules/`**
  This folder contains all the downloaded JavaScript libraries and packages your project needs to run (including React and Vite themselves). **You should never edit files in here manually**, and this folder is never pushed to GitHub (it's ignored by `.gitignore`) because it is huge and can be recreated anytime by running `npm install`.

- **`public/`**
  This folder is for static assets that you **do not** want Vite to process or bundle. Things placed here will be served exactly as they are.
  - _Example:_ Favicons (`vite.svg`), `robots.txt`, or large files like videos. You reference these files in your code using a simple absolute path (e.g., `/vite.svg`).

- **`src/` (Source)**
  This is where you will spend 99% of your time. It contains all the React components, CSS, and logic for your application. Vite processes and optimizes everything inside this folder.

---

### **2. Inside the `src/` Folder**

- **`assets/`**
  Unlike the `public` folder, assets put in here (like images, icons, or fonts) _are_ processed by Vite. If you import an image from this folder into a component, Vite will optimize it, hash the filename for caching, and bundle it with your code.
- **`main.jsx` (or `main.tsx` if using TypeScript)**
  This is the **entry point** of your React application. It selects the root `<div>` from your `index.html` file and renders your main `<App/>` component inside of it.
- **`App.jsx`**
  This is your root React component. It acts as the main container for your entire application. All other components you build (Navbar, Footer, Pages) will eventually be nested inside this file.
- **`index.css`**
  Your global stylesheet. This is where you put CSS resets, global variables, and styles that should apply to the entire website (like the `body` background color or global font families).
- **`App.css`**
  The specific stylesheet for the `App.jsx` component.

---

### **3. The Configuration Files (Root Directory)**

- **`index.html`**
  **Crucial Vite Difference:** In older tools, this file lived in the `public/` folder. Vite keeps it in the root directory. It is the main entry point to your app. If you look inside, you will see a `<script type="module" src="/src/main.jsx"></script>` tag, which is how Vite knows where to start reading your React code.
- **`package.json`**
  The "ID card" for your project. It contains:
  - The name and version of your app.
  - **Scripts:** Commands you can run (like `npm run dev` to start the server or `npm run build` to prepare for production).
  - **Dependencies:** A list of all external libraries your app needs to run (like `react` and `react-dom`).
- **`package-lock.json` (or `yarn.lock` / `pnpm-lock.yaml`)**
  An automatically generated file that locks down the exact versions of every single dependency in `node_modules`. This ensures that if another developer downloads your project, they get the exact same setup, preventing "it works on my machine" bugs.
- **`vite.config.js`**
  The configuration file for Vite itself. You can use this to add plugins (like the React plugin it comes with), change the port your local server runs on, or set up path aliases.
- **`.eslintrc.cjs`**
  The configuration file for ESLint, a tool that analyzes your code to quickly find and fix problems (like syntax errors or bad practices) before you even run the app.
- **`.gitignore`**
  Tells Git (your version control system) which files and folders to ignore and _not_ upload to GitHub. `node_modules` and your build output folders are always listed here.

# **Explaination of main.jsx**

This file, usually named `main.jsx` (or `index.js` in older setups), is the **entry point** of your entire React application. Its sole purpose is to grab your React code and inject it into the blank HTML page provided by the browser.

Here is a line-by-line breakdown of exactly what is happening:

### **1. `import { createRoot } from "react-dom/client";`**

React is actually split into two different libraries:

- `react`: The core library that handles components, state, and the Virtual DOM.
- `react-dom`: The library that knows how to take React's Virtual DOM and translate it into actual HTML that the browser can display.

Here, you are importing a specific function called `createRoot` from `react-dom/client`. This function tells React to prepare a specific spot on the webpage to act as the "root" (the foundation) where all your React code will live.
_(Note: `createRoot` is the modern standard introduced in React 18 to make apps run faster and smoother)._

### **2. `import App from "./App";`**

This line imports your main component.
Think of `<App/>` as the master container for your entire website. Every other component you build (Navbar, Sidebar, Profile, Footer) will eventually be nested inside this `App.jsx` file.

### **3. `createRoot(document.getElementById("root")).render(<App/>);`**

This is where the magic happens. It executes in two steps:

- **Step A: `document.getElementById("root")`**
  This is standard Vanilla JavaScript. It searches your `index.html` file (which Vite serves to the browser) and looks for an empty `<div>` with the ID of "root".
  _(If you open your `index.html` file, you will see `<div id="root"></div>` sitting completely empty)._

- **Step B: `createRoot(...).render(<App/>);`**
  React takes control of that empty "root" `<div>`. It then calls the `.render()` method to draw the `<App/>` component directly inside of it.

### **The Analogy**

Imagine you are plugging a video game console into a TV:

1.  **`index.html` (The TV):** It has a blank screen and an empty HDMI port (`<div id="root"></div>`).
2.  **`<App/>` (The Console):** It contains all your games, menus, and graphics (your React components).
3.  **`main.jsx` (The HDMI Cable):** It plugs the console into the TV, connecting your React code to the browser screen so the user can actually see it.

# **What are Components?**

Components are the fundamental building blocks of any React application. You can think of them as custom, independent JavaScript functions that return a piece of the user interface.

If you were building Twitter, you wouldn't write one massive file for the homepage. Instead, you would have a `Sidebar` component, a `Feed` component, and a `Tweet` component. You can then nest components inside each other (e.g., placing multiple `Tweet` components inside the `Feed` component) to build complex pages.

---

### **Types of Components and Syntax**

There are two primary ways to create components in React.

#### **1. Functional Components (The Modern Standard)**

These are simple JavaScript functions that accept inputs (called `props`) and return JSX. Since the introduction of "Hooks" in React 16.8, functional components can do everything class components can do, and they are now the industry standard because they are cleaner and easier to read.

```jsx
// Functional Component Syntax
import React from "react";

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to functional React.</p>
    </div>
  );
}

export default Greeting;
```

#### **2. Class Components (The Legacy Method)**

Before Hooks, if you needed your component to manage its own memory (state) or hook into specific moments in its lifespan (lifecycle methods), you _had_ to use a Class Component. They require you to extend `React.Component` and use a `render()` method.

```jsx
// Class Component Syntax
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Welcome to class-based React.</p>
      </div>
    );
  }
}

export default Greeting;
```

---

### **Difference Between Functional and Class-Based Components**

| Feature                  | Functional Components                                                                | Class-Based Components                                                        |
| :----------------------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Foundation**           | Plain JavaScript functions.                                                          | ES6 Classes extending `React.Component`.                                      |
| **Syntax & Boilerplate** | Minimal and clean code.                                                              | Requires more boilerplate code (constructors, `super()`, `render()` methods). |
| **Handling State**       | Uses the `useState()` Hook to manage state.                                          | Uses the `this.state` object and `this.setState()` method.                    |
| **Lifecycle Methods**    | Uses the `useEffect()` Hook to handle side effects (mounting, updating, unmounting). | Uses specific methods like `componentDidMount()`, `componentDidUpdate()`.     |
| **The `this` Keyword**   | Does not require the confusing `this` keyword.                                       | Heavily relies on `this` to access props, state, and methods.                 |
| **Current Usage**        | **Highly recommended.** The modern standard for React development.                   | Mostly seen in older legacy codebases. Rarely used for new features.          |

---

# **What are React Fragments?**

In React, a **Fragment** is a built-in feature that lets you group a list of multiple elements together without adding an extra HTML node (like a `<div>`) to the actual DOM (the structure of your webpage).

---

### **The Problem Fragments Solve**

In React, a component can only return **one single parent element**. If you try to return two adjacent elements without wrapping them, React will throw an error: _"Adjacent JSX elements must be wrapped in an enclosing tag."_

**The Wrong Way (This will cause an error):**

```jsx
function UserDetails() {
  return (
    <h2>Alice</h2>
    <p>Age: 25</p> // Error! Two siblings, no parent.
  );
}
```

**The Old Solution (Using a `<div>`):**
To fix this, developers used to wrap everything in a `<div>`.

```jsx
function UserDetails() {
  return (
    <div>
      <h2>Alice</h2>
      <p>Age: 25</p>
    </div>
  );
}
```

While this works, it creates a problem: if you do this everywhere, your webpage ends up with hundreds of useless, invisible `<div>` tags. This "DOM bloat" can make your app slightly slower and, more importantly, it can break CSS layouts like Flexbox or CSS Grid.

---

### **The Modern Solution: Fragments**

Fragments solve this by acting as an "invisible wrapper." They satisfy React's rule of returning a single parent, but they completely disappear when the HTML is actually rendered on the screen.

There are two ways to write a Fragment in a functional component:

#### **1. The Shorthand Syntax (Most Common)**

You can use empty HTML tags: `<>` and `</>`. This is what you will see in 99% of modern React code.

```jsx
import React from "react";

function UserDetails() {
  return (
    <>
      <h2>Alice</h2>
      <p>Age: 25</p>
    </>
  );
}
```

_When this renders in the browser, only the `<h2>` and `<p>` will exist. The `<></>` vanishes._

#### **2. The Explicit Syntax (`React.Fragment`)**

You can also write out the full name.

```jsx
import React, { Fragment } from "react";

function UserDetails() {
  return (
    <Fragment>
      <h2>Alice</h2>
      <p>Age: 25</p>
    </Fragment>
  );
}
```

---

### **When MUST you use the Explicit Syntax?**

You can almost always use the `<></>` shorthand, with **one exception**: when you are looping through an array to render a list of items.

In React, every item in a list needs a unique `key` prop. The shorthand `<></>` cannot accept props. If you need to pass a key, you _must_ use the explicit `<React.Fragment>` or `<Fragment>`.

```jsx
function UserList({ users }) {
  return (
    <dl>
      {users.map((user) => (
        // We have to use <Fragment> here because we need to pass a 'key'
        <React.Fragment key={user.id}>
          <dt>{user.name}</dt>
          <dd>{user.bio}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```

### **Summary: Why use Fragments instead of Divs?**

1. **Cleaner Code:** It keeps your HTML output clean and semantic.
2. **Better Performance:** Less memory usage and faster rendering because the browser has fewer DOM nodes to process.
3. **Doesn't Break CSS:** Prevents accidental layout bugs when using CSS Grid or Flexbox, which rely on specific parent-child relationships.</Fragment></React.Fragment>

# **What is "State" in React?**

In React, **State** is a built-in memory system for components. It is used to store data or information about the component that can change over time (like a user typing in a form, clicking a "Like" button, or fetching data from an API).

The most important thing to know about state is this: **Whenever a component's state changes, React automatically re-renders that component** to update the user interface with the new data.

Here is how state works in both class-based and function-based components.

---

### **1. State in Class-Based Components (The Old Way)**

In class components, state is always a single JavaScript object. You initialize it inside the `constructor` (or directly as a class property) and update it using a special built-in method called `this.setState()`.

**Key Rule:** You must _never_ modify state directly (e.g., `this.state.count = 1`). You must always use `this.setState()`, which tells React to update the UI.

**Example: A Simple Counter**

```jsx
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // 1. Initializing state as an object
    this.state = {
      count: 0,
      username: "Alice",
    };
  }

  // 2. Function to update state
  increment = () => {
    // We use this.setState to change the value
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>User: {this.state.username}</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Add 1</button>
      </div>
    );
  }
}

export default Counter;
```

_Note: In class components, `this.setState` automatically merges your updates. In the example above, updating `count` does not erase `username`._

---

### **2. State in Function-Based Components (The Modern Way)**

Functional components don't have built-in state objects. Instead, you use a React **Hook** called `useState`.

The `useState` hook returns an array with exactly two items:

1. The current state value.
2. A function that lets you update it.

**Example: A Simple Counter**

```jsx
import React, { useState } from "react";

function Counter() {
  // 1. Initializing state using the useState Hook
  // 'count' is the value, 'setCount' is the function to update it.
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Alice");

  // 2. Function to update state
  const increment = () => {
    setCount(count + 1); // We call the updater function directly
  };

  return (
    <div>
      <p>User: {username}</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Add 1</button>
    </div>
  );
}

export default Counter;
```

_Note: You can use `useState` as many times as you want in a single component to create separate pieces of state, which is much cleaner than managing one giant object._

---

### **Summary of Differences**

| Feature              | Function-Based (`useState`)                                                                                       | Class-Based (`this.state`)                                |
| :------------------- | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| **Initialization**   | `const [value, setValue] = useState(initialValue)`                                                                | `this.state = { key: initialValue }`                      |
| **Data Type**        | Can be anything (number, string, boolean, object, array).                                                         | **Must** be an object.                                    |
| **Updating**         | Call the specific updater function (e.g., `setValue(newValue)`).                                                  | Call `this.setState({ key: newValue })`.                  |
| **Updating Objects** | **Replaces** the old state entirely. You must manually copy old data if needed (using the spread operator `...`). | **Merges** the new data with the old state automatically. |
| **Readability**      | High. Very clean, especially with multiple independent variables.                                                 | Lower. Requires boilerplate code and the `this` keyword.  |

### **What are "Props" in React?**

**Props** (short for "properties") are how React components communicate with each other. They are used to pass data from a **Parent** component down to a **Child** component.

If a React component is like a custom JavaScript function, **props are the arguments** you pass into that function. Alternatively, you can think of them like standard HTML attributes (e.g., the `src` attribute in an `<img>` tag or the `href` in an `<a>` tag).

---

### **How Props Work in Function-Based Components**

When you pass data to a child component, React gathers all that data and bundles it into a single JavaScript object. This object is passed to your functional component as its first argument.

Here is a step-by-step look at how to pass and receive props.

#### **1. Passing Props (The Parent Component)**

You pass props to a component exactly like you add attributes to an HTML tag. You can pass strings, numbers, arrays, objects, or even other functions.

```jsx
import React from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <h2>User Directory</h2>
      {/* Passing 'name' (string) and 'age' (number) as props */}
      <UserProfile name="Alice" age={25} />
      <UserProfile name="Bob" age={30} />
    </div>
  );
}

export default App;
```

#### **2. Receiving Props (The Child Component)**

In the child component, you accept the `props` object as an argument and use dot notation to access the data.

```jsx
import React from "react";

function UserProfile(props) {
  return (
    <div className="card">
      {/* Accessing the data using props.propertyName */}
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default UserProfile;
```

#### **3. The Modern Way: Destructuring Props**

Writing `props.name` and `props.age` over and over can get repetitive. Most React developers use a JavaScript feature called **object destructuring** to unpack the props directly in the function parameters. This makes the code much cleaner.

```jsx
import React from "react";

// Unpacking 'name' and 'age' directly from the props object
function UserProfile({ name, age }) {
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserProfile;
```

---

### **The Golden Rule of Props: They are Read-Only**

A component must **never modify its own props**.

Props are strictly for data flowing _down_ the component tree. If you try to write `props.name = "Charlie"` inside the `UserProfile` component, React will throw an error. A component should act like a pure function with respect to its props: if it receives the same exact props, it should always return the same exact UI.

---

### **Props vs. State (A Quick Comparison)**

Because both Props and State hold data, they are often confused. Here is how to tell them apart:

| Feature                | Props                              | State (`useState`)                      |
| :--------------------- | :--------------------------------- | :-------------------------------------- |
| **What is it?**        | Data passed _in_ from a parent.    | A component's _internal_ memory.        |
| **Can it be changed?** | **No** (Immutable/Read-only).      | **Yes** (Mutable via updater function). |
| **Who controls it?**   | The Parent component.              | The Component itself.                   |
| **Analogy**            | A manager giving you instructions. | Your own internal to-do list.           |

---

# **Props**

### **1. What is Prop Drilling?**

**Prop Drilling** (sometimes called "threading") is a situation that happens when you need to pass data from a top-level component down to a deeply nested component.

Because React data only flows downwards (One-Way Data Binding), you are forced to pass the props through every single intermediate component in the middle—**even if those middle components don't need or care about the data.**

#### **The Analogy**

Imagine a Grandparent wants to give a gift to their Grandchild.
Instead of handing it to them directly, the Grandparent gives it to the Parent, and tells the Parent to hand it to the Child. The Parent acts as a "middleman." If there are 5 generations, the gift has to pass through 4 people who don't care about the gift, just to reach the youngest child.

#### **A Code Example of Prop Drilling**

Imagine an app where the root `App` component holds the user's data, but only the tiny `Avatar` component (deep down in the UI) actually needs the user's profile picture.

```jsx
// 1. TOP LEVEL (Has the data)
function App() {
  const user = { name: "Alice", avatarUrl: "/alice.jpg" };
  // App passes user down to Dashboard
  return <Dashboard user={user} />;
}

// 2. MIDDLE LEVEL (Doesn't care about user, but has to pass it)
function Dashboard({ user }) {
  // Dashboard passes user down to Profile
  return <Profile user={user} />;
}

// 3. MIDDLE LEVEL (Doesn't care about user, but has to pass it)
function Profile({ user }) {
  // Profile passes user down to Avatar
  return <Avatar user={user} />;
}

// 4. BOTTOM LEVEL (Finally uses the data!)
function Avatar({ user }) {
  return <img src={user.avatarUrl} alt={user.name} />;
}
```

### **Why is Prop Drilling a Problem?**

Prop drilling isn't inherently a "bug" (it works perfectly fine!), but as your app grows, it becomes a major headache:

1. **Messy Code:** Components get cluttered with props they don't even use.
2. **Hard to Maintain:** If you rename a prop, or need to pass a _new_ piece of data down the chain, you have to manually update every single component in the middle.
3. **Less Reusable:** The middle components become tightly connected to data they shouldn't even know about.

### **How do we fix Prop Drilling?**

If you only are passing data down 1 or 2 levels, prop drilling is totally fine. But if you are passing data down 5, 10, or 20 levels, React developers use state-management tools to fix it.

These tools allow a deeply nested component to "teleport" or grab data directly from a central vault, skipping the middle components entirely.

- **React Context API:** A built-in React feature for sharing data across the app without passing props.
- **State Management Libraries:** External tools like **Redux**, **Zustand**, or **Recoil** that act as a global database for your app's state.
