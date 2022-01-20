exports.blurb = `
<h1>Mission 5</h1>

`

exports.building = [
    {
        type: 'partition',
        children: [
            {   type: 'left-angled-roof' },
            {   
                type: 'wall',
                children: [{
                    type: 'narrow-window'
                }]
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
                    type: 'clock'
                }]
            },
            {   
                type: 'wall',
                children: [{
                    type: 'door'
                }]
            }
        ]
    },
    {
        type: 'partition',
        children: [
            {   type: 'right-angled-roof' },
            {   
                type: 'wall',
                children: [{
                    type: 'narrow-window'
                }]
            }
        ]
    }
    
];