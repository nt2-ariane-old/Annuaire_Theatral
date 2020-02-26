<?php
$info = array(
    // Available colors and color labels used in theme.
    'fields' => [
        'primary' => t('Haut et du Bas'),
        'secondary' => t('Numéro en cours'),
        'footer' => t('Pied de Page'),
        'text' => t('Texte'),
        'text_menu' => t('Texte Menu'),
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
                'text_menu' => '#000001',
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
                'text_menu' => '#000001',
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
                'text_menu' => '#ffffff',
                'background' => '#F2F2F2'
            ],
        ],
        'sug4' => [
            'title' => t('Teinte de Beige'),
            'colors' => [
                'primary' => '#D9CDBF',
                'secondary' => '#402F20',
                'footer' => '#A6886D',
                'text' => '#0B0B0D',
                'background' => '#F2F2F0'
            ],
        ],
        'sug5' => [
            'title' => t('Passion'),
            'colors' => [
                'primary' => '#41020C',
                'secondary' => '#8D192B',
                'footer' => '#425B70',
                'text' => '#1A2B3F',
                'text_menu' => '#ffffff',
                'background' => '#D9BEB6'
            ],
        ],
        'sug6' => [
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
array('blend_target' => '#ffffff');

// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/style.css'];
