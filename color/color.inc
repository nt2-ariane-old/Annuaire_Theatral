<?php

$info = array(
    // Available colors and color labels used in theme.
    'fields' => [
        'base' => t('Couleur de base'),
        'bg' => t('Couleur de fond'),
        'top' => t('Haut et du Bas'),
        'secondary' => t('Numéro en cours'),
        'footer' => t('Pied de Page'),
        'text' => t('Texte'),
        'second_text' => t('Seconde couleur de Texte'),
        'folder' => t('Couleur des dossiers'),
        'searchbar' => t('Bar de Recherche'),
        'button' => t('Bouton'),
        'other-bg' => t('Autre'),
        'link' => t('Lien'),
    ],
    // Pre-defined color schemes.
    'schemes' => [
        'default' => [
            'title' => t('Teinte de Gris (Default)'),
            'colors' => [
                'bg' => '#f7f7f7',
                'top' => '#ffffff',
                'secondary' => '#a60540',
                'footer' => '#e0e0e0',
                'text' => '#262626',
                'second_text' => '#1a2b3f',
                'folder' => '#a50331',
                'searchbar' => '#353a48',
                'button' => '#dbdae5',
                'other-bg' => '#404040',
                'link' => '#000000',

            ],
        ],
        'sug2' => [
            'title' => t('Teinte de Brun'),
            'colors' => [
                'top' => '#ffffff',
                'secondary' => '#cbaa8e',
                'footer' => '#ebd8ca',
                'text' => '#2C333D',
                'second_text' => '#a8a8a8',
                'searchbar' => '#353a48',
                'folder' => '#a60541',

                'bg' => '#F9F8FC',
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
                'footer' => '#bed0dd',
                'text' => '#00070D',
                'second_text' => '#ffffff',
                'searchbar' => '#000000',
                'folder' => '#a60541',

                'bg' => '#F2F2F2',
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
                'footer' => '#EBEDF3',
                'text' => '#29384C',
                'second_text' => '#ffffff',
                'searchbar' => '#BF0413',
                'bg' => '#ffffff',
                'link' => '#29384C',
                'button' => '#EBEDF3',
                'other-bg' => '#29384C',
                'folder' => '#a60541',


            ],
        ],
        'sug6' => [
            'title' => t('Teinte de Vert'),
            'colors' => [
                'top' => '#838C61',
                'secondary' => '#6b7af8',
                'footer' => '#BABF8F',
                'text' => '#00070D',
                'second_text' => '#1a2b3f',
                'searchbar' => '#353a48',
                'bg' => '#F2F2F2',
                'link' => '#00070D',
                'button' => '#F2F2DF',
                'folder' => '#a60541',
                'other-bg' => '#000000',

            ],
        ],

    ]
);
array('blend_target' => '#ffffff');

// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/style.css'];
