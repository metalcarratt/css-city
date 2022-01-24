exports.blurb = `
<h1>Mission 6 - Save the Princess</h1>
<p>The princess is in trouble! Not from a dragon... not from a fiend... but from... bad taste!</p>
<p>Please help her make the castle far more suiting to her taste.</p>
`

exports.building = [
    {
        type: 'partition',
        children: [
            {   type: 'center-angled-roof' },
            {   
                type: 'wall',
                children: [{
                    type: 'castle-window'
                }]
            },
            {   
                type: 'wall',
                children: [{
                    type: 'castle-window'
                }]
            }
        ]
    },
    {
        type: 'partition',
        children: [
            {   type: 'roof'},
            {   
                type: 'wall',
                children: [
                    {   type: 'castle-window' },
                    {   type: 'castle-window' }
                ]
            }
        ]
    },
    {
        type: 'partition',
        children: [
            {   type: 'center-angled-roof' },
            {   
                type: 'wall',
                children: [{
                    type: 'castle-window'
                }]
            },
            {   
                type: 'wall',
                children: [{
                    type: 'castle-window'
                }]
            },
            {   
                type: 'wall',
                children: [{
                    type: 'castle-door'
                }]
            }
        ]
    },
    {
        type: 'partition',
        children: [
            {   type: 'roof'},
            {   
                type: 'wall',
                children: [
                    {   type: 'castle-window' },
                    {   type: 'castle-window' }
                ]
            }
        ]
    },
    {
        type: 'partition',
        children: [
            {   type: 'center-angled-roof' },
            {   
                type: 'wall',
                children: [{
                    type: 'castle-window'
                }]
            },
            {   
                type: 'wall',
                children: [{
                    type: 'castle-window'
                }]
            }
        ]
    }
];