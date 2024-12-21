# Use_components_in_React_Native

## 2020ICT57

This project is a basic mobile app built with React Native and Expo, featuring a simple UI with text, a headline, and a button styled using React Native Paper.

## Project Overview

### Files
- **App.js**: Initializes and sets up the main app structure, providing a layout with Material Design components and rendering the Home component. 
- **Home.js**:  Displays a headline, body text, and a button with basic styling using React Native Paper components.


## Technologies Used

- **React Native**: The main framework used to build cross-platform mobile applications for iOS and Android. It enables the use of JavaScript and React to create native mobile apps.

- **Expo**: A framework and platform for universal React applications.

- **React Native Paper**: A UI component library that implements Material Design principles. It's used for the Text, Button, Divider, and other UI elements in this app.

- **React**: The JavaScript library used to build the UI components (Text, Button, View, etc.).

- **Styled Components / StyleSheet**:The StyleSheet API from React Native is used to style the app components with a JavaScript-based approach to CSS.

## How to Run
1. Create the folder named "myapp".


2. Changes the directory to myapp.
    ```bash
    cd myapp
    ```


3. Creates a new Expo project named MyMobileApp using the blank template.
    ```bash
    npx create-expo-app MyMobileApp --template blank
    ```


4. Changes the current directory to the newly created MyMobileApp project directory.
   ```bash
   cd MyMobileApp
   ```


5. Installs dependencies required for running the app on the web using Expo.
    ```bash
    npx expo install react-dom react-native-web @expo/metro-runtime
    ```


6. Start the development server
   ```bash
   npx expo start
   ```
   or

   To run the app if mobile and pc have different network or virtual environment (use tunnel mode)

   ```bash
   npx expo start --tunnel
    ```


7.  Open in a web browser

    type "w"

     ```bash
    w
    ```


8. Installs the React Native Paper library.(This is a UI component library that provides Material Design components for React Native.)
    ```bash
    npm install react-native-paper
    ```


9. Installs the react-native-safe-area-context library.(This library manage safe areas in a React Native app.)
    ```bash
    npm install react-native-safe-area-context
    ```

    
10. Installs the react-native-vector-icons library.(This provides customizable icons to use within the app.)
    ```bash
    npm install react-native-vector-icons
    ```

  