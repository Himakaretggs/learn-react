var heading = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        'div',
        {id: "child"},
        React.createElement(
            'h1',
            {id: 'element'},
            "I am a child added by React"
        )
    )
);

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
