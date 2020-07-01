<?php

$info = array(
    // Available colors and color labels used in theme.
    'fields' => [
        'top' => t('Haut et du Bas'),
        'secondary' => t('Numéro en cours'),
        'bottom' => t('Pied de Page'),
        'text' => t('Texte'),
        'second_text' => t('Seconde couleur de Texte'),
        'searchbar' => t('Bar de Recherche'),
        'base' => t('Couleur de fond'),
        'button' => t('Bouton'),
        'other-bg' => t('Autre'),

    ],
    // Pre-defined color schemes.
    'schemes' => [
        'default' => [
            'title' => t('Teinte de Gris (Default)'),
            'colors' => [
                'top' => '#ffffff',
                'secondary' => '#a60540',
                'bottom' => '#e0e0e0',
                'text' => '#262626',
                'second_text' => '#1a2b3f',
                'searchbar' => '#353a48',
                'base' => '#f7f7f7',
                'link' => '#000000',
                'button' => '#dbdae5',
                'other-bg' => '#404040',

            ],
        ],
        'sug2' => [
            'title' => t('Teinte de Brun'),
            'colors' => [
                'top' => '#ffffff',
                'secondary' => '#cbaa8e',
                'bottom' => '#ebd8ca',
                'text' => '#2C333D',
                'second_text' => '#a8a8a8',
                'searchbar' => '#353a48',

                'base' => '#F9F8FC',
                'link' => '#2C333D',
                'button' => '#eaeaea',
                'other-bg' => '#000000',

            ],
        ],
        'sug3' => [
            'title' => t('Teinte de Bleu'),
            'colors' => [
                'top' => '#0E5587',
                'secondary' => '#054B7D',
                'bottom' => '#bed0dd',
                'text' => '#00070D',
                'second_text' => '#ffffff',
                'searchbar' => '#000000',

                'base' => '#F2F2F2',
                'link' => '#00070D',
                'button' => '#eaeaea',
                'other-bg' => '#000000',

            ],
        ],
        'sug5' => [
            'title' => t('Teinte de Rouge'),
            'colors' => [
                'top' => '#73020C',
                'secondary' => '#E94347',
                'bottom' => '#EBEDF3',
                'text' => '#29384C',
                'second_text' => '#ffffff',
                'searchbar' => '#BF0413',
                'base' => '#ffffff',
                'link' => '#29384C',
                'button' => '#EBEDF3',
                'other-bg' => '#29384C',

            ],
        ],
        'sug6' => [
            'title' => t('Teinte de Vert'),
            'colors' => [
                'top' => '#838C61',
                'secondary' => '#6b7af8',
                'bottom' => '#BABF8F',
                'text' => '#00070D',
                'second_text' => '#1a2b3f',
                'searchbar' => '#353a48',
                'base' => '#F2F2F2',
                'link' => '#00070D',
                'button' => '#F2F2DF',
                'other-bg' => '#000000',

            ],
        ],

    ]
);
array('blend_target' => '#ffffff');

// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/style.css'];
