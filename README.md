# E-Commerce Website Project

This repository contains the source code for an E-commerce website built using React for the client-side and Node.js for the server-side. The website allows users to browse products, add them to a shopping cart, and proceed with a purchase using the Paytm payment gateway.

## Features

- Product browsing and search functionality
- Shopping cart management
- User authentication and login
- Integration with the Paytm payment gateway
- Responsive design for various devices

## Project Structure

The project is structured into three main components: the **client**, the **server**, and the **Paytm integration**.

### Client

The `client` directory contains the frontend code of the application built using React. It includes components for various aspects of the website:

- `Components`: Contains React components for different parts of the website, such as the home page, product details, shopping cart, and more.
- `context`: Contains context providers for managing state.
- `redux`: Contains actions, reducers, and constants for managing the global state.
- `templates`: Provides template configuration for different sections.
- Other directories contain utility files, styles, and the main entry point for the React app.

### Server

The `server` directory contains the backend code of the application built using Node.js. It includes the following main files and directories:

- `controller`: Contains controllers for handling different aspects of the application (user, product, cart, payment, etc.).
- `model`: Contains the database schemas for users, products, and the shopping cart.
- `routes`: Contains API routes and endpoints.
- `constants`: Contains constants related to products.
- `database`: Contains the database configuration and connection logic.
- Other directories contain utility files and the main entry point for the Node.js server.

### Paytm Integration

The `server/paytm` directory contains files related to the integration with the Paytm payment gateway. It includes the PaytmChecksum utility, sample code, and configuration files.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the `client` directory: `cd client`
3. Install client dependencies: `npm install`
4. Start the React app: `npm start`
5. Open another terminal window/tab
6. Navigate to the `server` directory: `cd ../server`
7. Install server dependencies: `npm install`
8. Start the Node.js server: `npm start`

Ensure you have the necessary environment variables configured, especially for the Paytm integration.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
