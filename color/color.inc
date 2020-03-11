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
        'button' => t('Bouton'),
        'underline' => t('Sous-Lignement'),

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
                'button' => '#eaeaea',
                'underline' => '#B8B1AF',

            ],
        ],
        'sug2' => [
            'title' => t('Teinte de Brun'),
            'colors' => [
                'top' => '#B79E96',
                'secondary' => '#cbaa8e',
                'bottom' => '#ebd8ca',
                'text' => '#2C333D',
                'text_menu' => '#1a2b3f',
                'searchbar' => '#353a48',

                'base' => '#F9F8FC',
                'link' => '#2C333D',
                'button' => '#eaeaea',
                'underline' => '#000000',

            ],
        ],
        'sug3' => [
            'title' => t('Teinte de Bleu'),
            'colors' => [
                'top' => '#0E5587',
                'secondary' => '#054B7D',
                'bottom' => '#bed0dd',
                'text' => '#00070D',
                'text_menu' => '#ffffff',
                'searchbar' => '#000000',

                'base' => '#F2F2F2',
                'link' => '#00070D',
                'button' => '#eaeaea',
                'underline' => '#000000',

            ],
        ],
        'sug5' => [
            'title' => t('Teinte de Rouge'),
            'colors' => [
                'top' => '#73020C',
                'secondary' => '#E94347',
                'bottom' => '#EBEDF3',
                'text' => '#29384C',
                'text_menu' => '#ffffff',
                'searchbar' => '#BF0413',
                'base' => '#ffffff',
                'link' => '#29384C',
                'button' => '#EBEDF3',
                'underline' => '#29384C',

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
                'button' => '#eaeaea',
                'underline' => '#000000',

            ],
        ],

    ]
);
array('blend_target' => '#ffffff');

// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['css/style.css'];
