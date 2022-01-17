exports.blurb = `
<h1>Mission 2 - Different stories</h1>
<p>This is a two-story house. It's hard to tell where one story stops and another ends. Can you perhaps make them different colours?</p>
<h1>How to:</h1>
<p>In CSS you can target the first or second element like follows</p>
<pre><code>
#wall:first-child {
    ...
}
</code></pre>
<p>Here are some other colours to play with:</p>
<ul>
    <li>LightGreen <span class="color" style="background-color: LightGreen"/></li>    
    <li>LimeGreen <span class="color" style="background-color: LimeGreen"/></li>
    <li>MediumSeaGreen <span class="color" style="background-color: MediumSeaGreen"/></li>
    <li>SeaGreen <span class="color" style="background-color: SeaGreen"/></li>
    <li>DarkGreen <span class="color" style="background-color: DarkGreen"/></li>
    <li>LightSeaGreen <span class="color" style="background-color: LightSeaGreen"/></li>
</ul>
<p>Can you make the house more stylish?</p>
`

exports.building = [
    {
        name: 'roof',
        
    },
    {
        name: 'house',
        children: [
            {
                name: 'wall',
                children: [
                    {
                        className: 'window'
                    },
                    {
                        className: 'window'
                    }
                ]
            },
            {
                name: 'wall',
                children: [
                    {
                        className: 'window'
                    },
                    {
                        className: 'door'
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
`;
