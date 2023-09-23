# Start server
npx parcel index.html

# Stop server
Crtl + C

# React


...

# Pascel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithms - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports different browsers
- Diagnostic - Error display beautifly
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod build

# JSX
- JSX (trasplied before it reaches the JS) - PARCEL - Babel
- JSX => Babel trsplies it to React.createElement => ReactElement-JS Object => HTMLElement(render)

- EX:
var Title = () => (
    <h1>Title</h1>
);

var JsxFunction = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></ Title>
        <h1 className="root" id="root" tabIndex="5">
            JSX called this Function
        </h1>
    </div>
);

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxFunction />);

# Swiggy - Config driven UI
- API data will configure from backend by loactions

# Two types of export & import
- Default export/import =>
export default Component_Name;
import Component_name from '{Path}'

- Named Export/Import
export const Component
import {Component} from '{Path}'