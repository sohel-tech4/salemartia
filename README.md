Salemartia - React.js E-Commerce Product Listing
Live Link - https://salemartia.netlify.app

Project Overview


Salemartia is a responsive e-commerce product listing page built using React.js. It fetches product data from the FakeStoreAPI and displays it in a grid or list view with search, filter, and sorting functionality. The app is designed to be a showcase of React.js best practices, including state management, API integration, and component-based architecture.

Features


Product Listing: Displays products fetched from the FakeStoreAPI, including product image, name, price, and description.
Search Functionality: Real-time product search by name.
Filtering: Filter products by category, price range, and availability.
Sorting: Sort products by price, name, and rating.
Responsive Design: Fully responsive across mobile, tablet, and desktop devices.

How It Works


Fetching Product Data: The app fetches the product data from the FakeStoreAPI when the component mounts using the fetch API or Axios. The product data is stored in the component's state using React's useState hook. If an error occurs while fetching the data, a fallback message or retry option will be displayed.

Search Functionality: The search bar allows users to search for products by name. The useState hook is used to track the search term, and useEffect ensures that the product list updates in real-time as the user types in the search query. The products are filtered based on the search term, and only those matching the query are displayed.

Filtering: The app offers multiple filtering options:

Categories: Filter products by category (e.g., electronics, clothing).
Price Range: Filter products based on their price range using a slider or input fields.
Availability: Toggle between showing in-stock and out-of-stock items.
The filters are combined using useState hooks for each filter type, and they work together to refine the product list.

Sorting: Users can sort products by:

Price: Ascending or descending.

Responsive Design: The product listing page uses TailwindCSS and Grid to ensure the layout adapts to different screen sizes, ensuring good usability on mobile, tablet, and desktop. Media queries are used to adjust the grid layout and ensure the app looks great across all devices.

Conclusion


This project demonstrates a solid understanding of React.js fundamentals such as component structure, state management, API integration, and responsive design. The app is designed to be flexible and can easily be extended with additional features like pagination, more advanced filters, or user authentication.
