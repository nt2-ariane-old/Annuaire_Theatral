<?php
$info = array(
    // Available colors and color labels used in theme.
    'fields' => [
        'primary' => t('Haut et du Bas'),
        'secondary' => t('Numéro en cours'),
        'footer' => t('Pied de Page'),
        'text' => t('Texte'),
        'background' => t('Couleur de fond')
    ],
    // Pre-defined color schemes.
    'schemes' => [
        'default' => [
            'title' => t('Teinte de Gris (Default)'),
            'colors' => [
                'primary' => '#e8e8e8',
                'secondary' => '#ee2367',
                'footer' => '#f3f3f3',
                'text' => '#000000',
                'background' => '#ffffff'
            ],
        ],
        'sug2' => [
            'title' => t('Teinte de Brun'),
            'colors' => [
                'primary' => '#B79E96',
                'secondary' => '#215479',
                'footer' => '#BEA694',
                'text' => '#2C333D',
                'background' => '#F9F8FC'
            ],
        ],
        'sug3' => [
            'title' => t('Teinte de Bleu'),
            'colors' => [
                'primary' => '#0E5587',
                'secondary' => '#054B7D',
                'footer' => '#5583A6',
                'text' => '#00070D',
                'background' => '#F2F2F2'
            ],
        ],
        'sug4' => [
            'title' => t('Coucher de Soleil'),
            'colors' => [
                'primary' => '#F2AE30',
                'secondary' => '#F27B35',
                'footer' => '#F28F38',
                'text' => '#000000',
                'background' => '#A66844'
            ],
        ],
        'sug5' => [
            'title' => t('Teinte de Vert'),
            'colors' => [
                'primary' => '#838C61',
                'secondary' => '#1A3940',
                'footer' => '#BABF8F',
                'text' => '#00070D',
                'background' => '#F2F2DF'
            ],
        ],

    ]
);
// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/style.css'];
