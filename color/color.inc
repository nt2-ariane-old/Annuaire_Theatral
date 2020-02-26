<?php
$info = array(
    // Available colors and color labels used in theme.
    'fields' => [
        'primary' => t('Primary Color'),
        'secondary' => t('Secondary Color'),
        'footer' => t('Footer'),
        'text' => t('Text Color'),
        'background' => t('Background Color')
    ],
    // Pre-defined color schemes.
    'schemes' => [
        'default' => [
            'title' => t('Suggestion 1 (Default)'),
            'colors' => [
                'primary' => '#e8e8e8',
                'secondary' => '#ee2367',
                'footer' => '#f3f3f3',
                'text' => '#000000',
                'background' => '#ffffff'
            ],
        ],
        'sug2' => [
            'title' => t('Suggestion 2 '),
            'colors' => [
                'primary' => '#ffffff',
                'secondary' => '#215479',
                'footer' => '#f3f3f3',
                'text' => '#000000',
                'background' => '#f7f7f7'
            ],
        ],
       
    ]
);
// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/style.css'];
