<?php
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;
use Drupal\Core\Ajax\CommandInterface;

function lano_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
    // Work-around for a core bug affecting admin themes. See issue #943212.
    $theme_file = drupal_get_path('theme', 'lano') . '/theme-settings.php';
    $build_info = $form_state->getBuildInfo();
    if (!in_array($theme_file, $build_info['files'])) {
        $build_info['files'][] = $theme_file;
    }
    $form_state->setBuildInfo($build_info);

    $form['#submit'][] = 'lano_theme_settings_form_submit';
    $form['#attached']['library'][] = 'lano/theme-settings';
    $form['advanced'] = array(
        '#type' => 'vertical_tabs',
        '#default_tab' => 'general_setting',
    );
    $form['general_setting'] = array(
        '#type' => 'details',
        '#title' => t('General Settings'),
        '#group' => 'advanced',
    );
    $form['general_setting']['themes_settings'] = array(
        '#type'          => 'select',
        '#title'         => t('Theme Settings'),
        '#options' => array(
            'light' => t('Light Theme'),
            'dark' => t('Dark Theme'),
        ),
        '#default_value' => theme_get_setting('themes_settings', 'lano'),
    );
    if (!\Drupal::moduleHandler()->moduleExists('yaml_editor')) {
        $message = t('<strong>It is recommended to install the</strong> <a href="@yaml-editor">YAML Editor</a> module for easier editing.', [
            '@yaml-editor' => 'https://www.drupal.org/project/yaml_editor',
        ]);

        //drupal_set_message($message, 'warning');
        $form['general_setting']['status_messages'] = [
           '#markup' => $message
        ];
    }
    $form['general_setting']['tracking_code'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Tracking Code'),
        '#default_value' => theme_get_setting('tracking_code', 'lano'),
        '#description'   => t("Add custom script on your site."),
    );
    $form['general_setting']['custom_css'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Custom CSS'),
        '#default_value' => theme_get_setting('custom_css', 'lano'),
        '#description'   => t('<strong>Example:</strong><br/>h1 { font-family: \'Metrophobic\', Arial, serif; font-weight: 400; }'),
    );
    //Border settings
    $form['border_settings'] = array(
        '#type' => 'details',
        '#title' => t('Border Settings'),
        '#group' => 'advanced',
    );
    $form['border_settings']['border_social'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Border Social'),
        '#rows'           => 6,
        '#default_value' => theme_get_setting('border_social', 'lano'),
        '#description'   => t("Add custom html"),
    );
    $form['border_settings']['border_massage'] = array(
        '#type'          => 'textarea',
        '#title'         => t('Border Massage'),
        '#rows'           => 4,
        '#default_value' => theme_get_setting('border_massage', 'lano'),
        '#description'   => t("Add custom text"),
    );

    //Blog settting
    $form['blog_settings'] = array(
        '#type' => 'details',
        '#title' => t('Blog Settings'),
        '#group' => 'advanced',
    );
    $form['blog_settings']['blog_style'] = array(
        '#type'          => 'select',
        '#title'         => t('Default Blog Style'),
        '#options' => array(
            'grid' => t('Blog Grid'),
            'minimal' => t('Blog Minimal'),
            'minimal-arch'=> t('Blog minimal-arch'),
            'zig-zag' => t('Blog Zig-zag'),
            'thougts' => t('Blog Thougts'),
            'photo' => t('Blog Photo'),
        ),
        '#default_value' => theme_get_setting('blog_style', 'lano'),
    );


    //Page contact settings
    $form['page_contact_settings'] = array(
        '#type' => 'details',
        '#title' => t('Pages Contact Settings'),
        '#group' => 'advanced',
    );
    $form['page_contact_settings']['data_widget_latlng'] = array(
        '#type'          => 'textfield',
        '#title'         => t('Data Widget Latlng'),
        '#default_value' => theme_get_setting('data_widget_latlng', 'lano'),
        '#description'   => t("Add Data"),
    );

}

function lano_theme_settings_form_submit(&$form, FormStateInterface $form_state) {
    $image_fid[0] = $form_state->getValue('system_page_title_bgimage');
    $image_fid[1] = $form_state->getValue('blog_page_title_bgimage');
    $image_fid[2] = $form_state->getValue('portfolio_page_title_bgimage');
    $image_fid[3] = $form_state->getValue('page404_background_image');
    $image_fid[4] = $form_state->getValue('page404_logo');
    $image_fid[5] = $form_state->getValue('shop_page_title_bgimage');
    $count = count($image_fid);
    for ($i=0; $i < $count; $i++) {
        if( $image_fid[$i]) {
            $file = File::load($image_fid[$i][0]);
            $file_usage = \Drupal::service('file.usage');
            $file_usage->add($file, 'lano', 'theme', 1);
        }
    }
        
}
?>