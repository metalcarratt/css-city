exports.blurb = `
<h1>Mission 1 - Purple-ize the house</h1>
<p>The colour of this house is a bit bland. Can you make it more pretty?</p>
<p>First you need to target one of the building parts. Some parts have an id, and some have a class. To target a part with an id of 'roof', you can type:</p>
<pre><code>
#roof {
    ...
}
</code></pre>
<p>To target a part with a class of 'window', you can type:</p>
<pre><code>
.window {
    ...
}
</code></pre>
<p>Finally you can change the color by setting the 'background-color' property like so:</p>
<pre><code>
#roof {
    background-color: purple;
} 
</code></pre>
<p>Here are some colours to play with:</p>
<ul>
    <li>Thistle <span class="color" style="background-color: Thistle"/></li>
    <li>Plum <span class="color" style="background-color: Plum"/></li>
    <li>Orchid <span class="color" style="background-color: Orchid"/></li>
    <li>MediumPurple <span class="color" style="background-color: MediumPurple"/></li>
    <li>RebeccaPurple <span class="color" style="background-color: RebeccaPurple"/></li>
    <li>Indigo <span class="color" style="background-color: Indigo"/></li>
</ul>
<p>Can you make the house more pretty?</p>
`

exports.building = [
    {
        name: 'roof',
        
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
