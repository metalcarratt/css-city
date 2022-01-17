exports.blurb = `
<h1>Mission 3 - Give me a garrage</h1>
<p>This house has a garage. Can you make the garage wall a diffent colour from the house?</p>
<h1>How to:</h1>
<p>In CSS you can target an element within an element by typing them in order with a space between. For example the following targets the left roof:</p>
<pre><code>
.left #roof {
    ...
}
</code></pre>
<p>Here are some more colours to play with:</p>
<ul>
    <li>PowderBlue <span class="color" style="background-color: PowderBlue"/></li>
    <li>LightSteelBlue <span class="color" style="background-color: LightSteelBlue"/></li>
    <li>CornflowerBlue <span class="color" style="background-color: CornflowerBlue"/></li>    
    <li>MediumSlateBlue <span class="color" style="background-color: MediumSlateBlue"/></li>
    <li>RoyalBlue <span class="color" style="background-color: RoyalBlue"/></li>
    <li>MidnightBlue <span class="color" style="background-color: MidnightBlue"/></li>
</ul>
`

exports.building = [
    {
        className: 'left',
        children: [ {
            name: 'roof',   
        },
        {
            name: 'house',
            children: [ {
                name: 'wall',
                    children: [
                        { className: 'window' },
                        { className: 'window' }
                    ]
                },
                {
                    name: 'wall',
                    children: [
                        { className: 'window' },
                        { className: 'door' }
                    ]
                }
            ]
        } ]
    },
    {
        className: 'right',
        children: [
            {
                name: 'roof',   
            },
            {
                name: 'wall',
                children: [
                    {
                        className: 'garage-door'
                    }
                ]
            }
        ]
    }
];


exports.styles = `
#roof {
    background-color: LightSalmon;
    width: 100px;
    height: 40px;
    border-radius: 40px 40px 0 0;
}

#wall {
    background-color: PeachPuff;
    width: 100px;
    height: 60px;
    
}

.window {
    background-color: DarkKhaki;
    width: 30px;
    height: 20px;
    margin-top: 15px;
    margin-left: 15px;
    display: inline-block;
    vertical-align: top;
    border-top: 1px solid black;
    border-left: 1px solid black;
    box-sizing: border-box;
}

.door {
    background-color: DarkKhaki;
    width: 20px;
    height: 45px;
    display: inline-block;
    vertical-align: top;
    margin-top: 15px;
    margin-left: 20px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    box-sizing: border-box;
}

.garage-door {
    height: 45px;
    width: 75px;
    margin-top: 15px;
    margin-left: 15px;
    display: inline-block;
    background-color: DarkKhaki;
    border-top: 1px solid black;
    border-left: 1px solid black;
}

.left, .right {
    display: inline-block;
    vertical-align: bottom;
}
`;
