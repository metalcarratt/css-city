exports.blurb = `
<h1>Mission 3 - Park my ride</h1>
<p>Looks at the parts below. Can you see lots of parts within parts? It's starting to get messy right? How can I change, for example, the roof
of only the garage to be a different colour? Look at the following:</p>
<pre><code>
#partition:nth-child(1) #roof {
    background-color: Khaki;
}
</code></pre>

<p>What happened here? We first found the second partition, "#partition:nth-child(1)" and then we found the roof, "#roof" inside it. We make
sure to put an empty space, " " between them. Now we can style the garage roof!</p>

<p>Can you spruce up my garage a bit?</p>
`

exports.building = [
    {
        type: 'partition',
        children: [ {
            type: 'roof'
        },
        {
            type: 'house',
            children: [ {
                type: 'wall',
                    children: [
                        {   type: 'window' },
                        {   type: 'window' }
                    ]
                },
                {
                    type: 'wall',
                    children: [
                        {   type: 'window' },
                        {   type: 'door' }
                    ]
                }
            ]
        } ]
    },
    {
        type: 'partition',
        children: [
            {   type: 'roof' },
            {
                type: 'wall',
                children: [
                    {   type: 'garage-door' }
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
