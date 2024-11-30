# Basic React-redux pattern (Outdated! just for study purposes)

## Concepts

### React Components

- **Functional Components**: The project uses functional components, such as `CakeContainer`, `HooksCakeContainer`, `NewCakeContainer`, and `UserContainer`.
- **Hooks**: React hooks like `useState`, `useEffect`, and `useSelector` are used for state management and side effects.

### Redux

- **Actions**: Actions are defined in files like `cakeActions.ts`, `iceCreamActions.ts`, and `userActions.ts`. They describe the type of action and the payload.
- **Reducers**: Reducers are defined in files like `cakeReducer.ts`, `iceCreamReducer.ts`, and `userReducer.ts`. They specify how the state changes in response to actions.
- **Action Types**: Action types are constants defined in files like `cakeTypes.ts`, `iceCreamTypes.ts`, and `userTypes.ts`.
- **Thunks**: Thunks are used for asynchronous actions, such as fetching data from an API. The `fetchUsers` function in `userActions.ts` is an example of a thunk.
- **Store**: The Redux store is configured in `store.ts` using `legacy_createStore` and `applyMiddleware` with `redux-thunk`.

### React-Redux Integration

- **Provider**: The `Provider` component from `react-redux` is used in `App.tsx` to make the Redux store available to the entire application.
- **useDispatch and useSelector**: These hooks are used to interact with the Redux store in functional components. `useAppDispatch` is a custom hook defined in `store.ts` to use the typed dispatch function.

### TypeScript

- **Type Definitions**: TypeScript is used throughout the project to define types for actions, state, and props. This helps in catching errors early and improving code quality.

## Running the Project

To run the project, use the following commands:

```sh
# Install dependencies
npm install

# Start the development server
npm run dev

# Build the project
npm run build

# Preview the build
npm run preview

# Lint the code
npm run lint
```
