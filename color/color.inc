<?php
$info = [
    // Available colors and color labels used in theme.
    'fields' => [
        'primary' => t('Primary Color'),
        'secondary' => t('Secondary Color'),
        'text' => t('Text Color'),
        'background' => t('Background Color')
    ],
    // Pre-defined color schemes.
    'schemes' => [
        'default' => [
            'title' => t('Default'),
            'colors' => [
                'primary' => '#e8e8e8',
                'secondary' => '#ee2367',
                'text' => '#000000',
                'background' => '#ffffff'
            ],
        ],
        'red' => [
            'title' => t('Red'),
            'colors' => [
                'primary' => '#f44336',
                'secondary' => '#ffcdd2',
                'text' => '#600000',
                'background' => '#ffffff'
            ]
        ]
    ]
];
// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/style.css'];
