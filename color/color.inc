<?php
$info = array(
    // Available colors and color labels used in theme.
    'fields' => [
        'top' => t('Haut et du Bas'),
        'secondary' => t('Numéro en cours'),
        'bottom' => t('Pied de Page'),
        'text' => t('Texte'),
        'text_menu' => t('Texte Menu'),
        'searchbar' => t('Bar de Recherche'),
        'base' => t('Couleur de fond'),
        'link' => t('Link color'),
    ],
    // Pre-defined color schemes.
    'schemes' => [
        'default' => [
            'title' => t('Teinte de Gris (Default)'),
            'colors' => [
                'top' => '#e8e8e8',
                'secondary' => '#ee2367',
                'bottom' => '#f3f3f3',
                'text' => '#000000',
                'text_menu' => '#1a2b3f',
                'searchbar' => '#353a48',
                'base' => '#ffffff',
                'link' => '#000000',

            ],
        ],
        'sug2' => [
            'title' => t('Teinte de Brun'),
            'colors' => [
                'top' => '#B79E96',
                'secondary' => '#215479',
                'bottom' => '#BEA694',
                'text' => '#2C333D',
                'text_menu' => '#1a2b3f',
                'searchbar' => '#353a48',

                'base' => '#F9F8FC',
                'link' => '#2C333D',
            ],
        ],
        'sug3' => [
            'title' => t('Teinte de Bleu'),
            'colors' => [
                'top' => '#0E5587',
                'secondary' => '#054B7D',
                'bottom' => '#5583A6',
                'text' => '#00070D',
                'text_menu' => '#ffffff',
                'searchbar' => '#000000',

                'base' => '#F2F2F2',
                'link' => '#00070D',
            ],
        ],
        'sug4' => [
            'title' => t('Teinte de Beige'),
            'colors' => [
                'top' => '#D9CDBF',
                'secondary' => '#402F20',
                'bottom' => '#A6886D',
                'text' => '#0B0B0D',
                'text_menu' => '#1a2b3f',
                'searchbar' => '#353a48',
                'base' => '#F2F2F0',
                'link' => '#0B0B0D',
            ],
        ],
        'sug5' => [
            'title' => t('Passion'),
            'colors' => [
                'top' => '#41020C',
                'secondary' => '#8D192B',
                'bottom' => '#8E4D64',
                'text' => '#1A2B3F',
                'text_menu' => '#ffffff',
                'searchbar' => '#ffffff',
                'base' => '#D9BEB6',
                'link' => '#1A2B3F',
            ],
        ],
        'sug6' => [
            'title' => t('Teinte de Vert'),
            'colors' => [
                'top' => '#838C61',
                'secondary' => '#1A3940',
                'bottom' => '#BABF8F',
                'text' => '#00070D',
                'text_menu' => '#1a2b3f',
                'searchbar' => '#353a48',
                'base' => '#F2F2DF',
                'link' => '#00070D',
            ],
        ],

    ]
);
array('blend_target' => '#ffffff');

// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/style.css'];
