var heading = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        'div',
        {id: "child"},
        [
            React.createElement(
            'h1',
            {id: 'element'},
            "I am a h1 tag"
            ),
            React.createElement(
                'h2',
                {id: 'element'},
                "I am a h2 tag"
            )
        ]
    )
);

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
