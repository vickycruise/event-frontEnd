#!/bin/bash

# Base directory for src
BASE_DIR=$(pwd)
SRC_DIR="$BASE_DIR/src"

# Define folder structure
FOLDERS=(
    "$SRC_DIR"
    "$SRC_DIR/assets"
    "$SRC_DIR/assets/images"
    "$SRC_DIR/assets/styles"
    "$SRC_DIR/components"
    "$SRC_DIR/pages"
    "$SRC_DIR/services"
    "$SRC_DIR/providers"
    "$SRC_DIR/utils"
    "$SRC_DIR/store"
    "$SRC_DIR/store/actions"
    "$SRC_DIR/store/reducers"
    "$SRC_DIR/store/middlewares"
)

# Create the folders
for FOLDER in "${FOLDERS[@]}"; do
    echo "Creating directory: $FOLDER"
    mkdir -p "$FOLDER"
done

# Define file paths
FILES=(
    "$SRC_DIR/index.js"
     "$SRC_DIR/assets/styles/index.css"
     "$SRC_DIR/providers/route.js"
    "$SRC_DIR/store/store.js"
    "$SRC_DIR/store/actions/index.js"
    "$SRC_DIR/store/reducers/index.js"
    "$SRC_DIR/store/reducers/rootReducer.js"
    "$SRC_DIR/store/middlewares/logger.js"
)

# Create files
for FILE in "${FILES[@]}"; do
    echo "Creating file: $FILE"
    touch "$FILE"
done

# Add boilerplate content to index.js
cat <<EOL > "$SRC_DIR/index.js"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './assets/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
EOL

# Add boilerplate content to store.js
cat <<EOL > "$SRC_DIR/store/store.js"
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import logger from './middlewares/logger';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
EOL

# Add boilerplate content to rootReducer.js
cat <<EOL > "$SRC_DIR/store/reducers/rootReducer.js"
import { combineReducers } from 'redux';
// Import individual reducers here

const rootReducer = combineReducers({
    // Example: user: userReducer
});

export default rootReducer;
EOL

# Add boilerplate content to logger.js
cat <<EOL > "$SRC_DIR/store/middlewares/logger.js"
const logger = store => next => action => {
    console.log('Dispatching:', action);
    const result = next(action);
    console.log('Next state:', store.getState());
    return result;
};

export default logger;
EOL

# Add boilerplate content to actions/index.js
cat <<EOL > "$SRC_DIR/store/actions/index.js"
// Add action creators here

export const exampleAction = () => ({
    type: 'EXAMPLE_ACTION',
    payload: {}
});
EOL

# Add boilerplate content to reducers/index.js
cat <<EOL > "$SRC_DIR/store/reducers/index.js"
// Example reducer
const initialState = {};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EXAMPLE_ACTION':
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default exampleReducer;
EOL

echo "React project structure with Redux setup created successfully!"
