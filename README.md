### Color Picker with:
  JavaScript, ES6, React, JSX, Redux, Jest

![color_picker_thumbnail](https://user-images.githubusercontent.com/23530054/37028791-929cb8aa-2135-11e8-8861-42f0f7305088.png)

### Clone the repo, and then:
- yarn start - starts dev server with auto update and lint
- yarn test - starts tests with auto update
- yarn build - creates production build

### Test coverage:  
  App render, actions, components, reducers

### Note:  
  The state handling is separated into two parts: 
  - global state (available colors, modal state, fetch status) are handled by redux
  - local state (text input, filtered list) by react state

  Apart from it being a sample React/Redux app
  there seems to be no need to use Redux in this
  application at all. The outcome would be very
  similar using less code and with React alone.

  Also there is no need to import through the index
  file of a folder in such a small application. 

### Issues:
- Functions inside App.js are not tested
- Can submit before colors are loaded
- Loaded states are defined as strings instead of constants