### Color Picker with:
  JavaScript, ES6, React, JSX, Redux, Jest

### Working version
https://lukaszsobek.com/repo/color-picker/
(accept insecure content as api is hosted on http )

![color_picker_thumbnail](https://user-images.githubusercontent.com/23530054/37028791-929cb8aa-2135-11e8-8861-42f0f7305088.png)

### Can do:
- Can load remote suggestion file with a 5 second delay
- Can see "loading" while remote file is being fetched
- Can pick colors from fetched list
- Can use suggestions after 2 characters
- Can apply selected color to background with a 50% opacity
- Can only submit after remote data file is loaded

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