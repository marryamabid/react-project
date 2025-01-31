Key Concepts of React Router
React Router is a routing library for React applications that helps navigate between different pages without reloading the page. It is widely used for single-page applications (SPAs). Below are the key concepts:

1. Routing Setup
🔹 createBrowserRouter() (Defining Routes)
This is used to create a router instance.
It helps define routes for different pages in the application.
🔹 createRoutesFromElements() (Creating Routes)
This converts multiple <Route> components into a proper route configuration.
🔹 RouterProvider (Providing Router Configuration)
It passes the router instance to the entire React application.
✅ Example:

jsx
Copy
Edit
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> }
]);

function App() {
  return <RouterProvider router={router} />;
}
📝 This sets up routes for / (Home) and /about (About) in the application.

2. Route Structure
🔹 Nested Routes
Helps in creating structured layouts where some pages are inside others.
Useful for common layouts like a navbar or sidebar.
✅ Example of Nested Routes:

jsx
Copy
Edit
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Common Layout
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> }
    ]
  }
]);
The Layout component will always be visible.
When navigating to /home or /about, it renders inside Layout.
3. Dynamic Routes & Params
🔹 Dynamic Routes (path='/user/:userId')
Used for pages with dynamic data, such as user profiles or project details.
:userId is a placeholder that can change based on the URL.
✅ Example:

jsx
Copy
Edit
<Route path='/user/:userId' element={<UserProfile />} />
🔹 Accessing Dynamic Params (useParams())
useParams() extracts dynamic values from the URL.
✅ Example:

jsx
Copy
Edit
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  return <h2>User ID: {userId}</h2>;
}
📌 If URL is /user/123, userId will be "123".

4. Data Loading with loader
🔹 Why Use Loaders?
Fetches data before rendering the page.
Prevents unnecessary API calls.
Works well with useLoaderData().
✅ Example:

jsx
Copy
Edit
export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
};

<Route path='/github' element={<Github />} loader={githubLoader} />
When navigating to /github, data is fetched before rendering.
🔹 Accessing Data (useLoaderData())
jsx
Copy
Edit
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return <h2>Followers: {data.followers}</h2>;
}
✅ This improves performance as data is preloaded before the component is mounted.

5. Navigation Between Pages
🔹 <Link> vs <a>
<Link> is better than <a> because:
<a> reloads the page (bad for SPAs).
<Link> updates the URL without reloading.
✅ Example:

jsx
Copy
Edit
<Link to="/about">Go to About</Link>  // ✅ Fast, No reload
<a href="/about">Go to About</a>      // ❌ Slow, Reloads page
🔹 Active Links with <NavLink>
Highlights the current active page.
✅ Example:

jsx
Copy
Edit
<NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
  About
</NavLink>
🔹 If the user is on /about, it adds an "active" class.

6. Lazy Loading & Suspense (Optimization)
🔹 Why Use Lazy Loading?
Normally, all components load at once → slows down the app.
Lazy loading loads pages only when needed.
✅ Example:

jsx
Copy
Edit
import { lazy, Suspense } from "react";
const About = lazy(() => import("./About"));

<Route path='/about' element={
  <Suspense fallback={<h2>Loading...</h2>}>
    <About />
  </Suspense>
} />
🚀 How it Works?

The <About /> component won't load until the user visits /about.
<Suspense> shows "Loading..." while fetching the page.
Final Thoughts
🔹 React Router helps create a structured, dynamic, and efficient SPA.
🔹 Use loaders for preloading data, dynamic routes for user-based content, and lazy loading for better performance.
🔹 Use <Link> and <NavLink> for better navigation instead of <a> tags.