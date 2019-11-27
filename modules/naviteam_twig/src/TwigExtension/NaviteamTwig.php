<?php
namespace Drupal\naviteam_twig\TwigExtension;
use Drupal\image\Entity\ImageStyle; 
use Drupal\node\Entity\Node;
use Drupal\file\Entity\File;
Use Drupal\taxonomy\Entity\Vocabulary;

class NaviteamTwig extends \Twig_Extension {

/**
* Generates a list of all Twig filters that this extension defines.
*/
    public function getFilters() {
        return array(
            new \Twig_SimpleFilter('substr_count', array($this, 'substrCount')),
            new \Twig_SimpleFilter('str_replace', array($this, 'strReplace')),
            new \Twig_SimpleFilter('str_replace_first', array($this, 'strReplaceFirst')),
            new \Twig_SimpleFilter('image_style_url', array($this, 'imageStyle')),
            new \Twig_SimpleFilter('image_create_url', array($this, 'imageUrl')),
            new \Twig_SimpleFilter('print_r', array($this, 'printerObj')),
            new \Twig_SimpleFilter('node_load', array($this, 'nodeLoad')),
            new \Twig_SimpleFilter('explode', array($this, 'explodeStr')),
            new \Twig_SimpleFilter('concatenation', array($this, 'concatenationStr')),
            new \Twig_SimpleFilter('get_uri_file', array($this, 'getURI')),
            new \Twig_SimpleFilter('get_list_term', array($this, 'getListTerm')),
        );
    }

    /**
    * Gets a unique identifier for this Twig extension.
    */
    public function getName() {
        return 'naviteam_twig.twig_extension';
    }

    /**
    * Replaces all instances of "animal" in a string with "plant".
    */
    // public static function strReplace($string) {
    //     return preg_replace('#[0-9 ]*#', '', $string);
    // }

    public static function nodeLoad($nid) {
        return node_load($nid);
    }
    public static function explodeStr($string, $separator) {
        return explode($separator, $string);
    }
    public static function concatenationStr($string1, $string2, $separator = '') {
        $string = $string1.$separator.$string2;
        return  $string;
    }
    public static function substrCount($string, $sub) {
        return substr_count($string, $sub);
    }
    public static function printerObj($string) {
        return print_r($string);
    }
    public static function strReplace($string, $old, $new) {
        return str_replace($old, $new, $string);
    }
    public static function strReplaceFirst($string, $from, $to, $n = 1) {
        $from = '/'.preg_quote($from, '/').'/';
        //$string = render($string);
        return preg_replace($from, $to, $string, $n);
    }
    public static function imageStyle($uri, $image_style) {
        $url = ImageStyle::load($image_style)->buildUrl($uri);
        return $url;
    }
    public function getURI($fid) {
        $file = File::load($fid);
        $path = $file->getFileUri();
        return $path;
    }
    public static function imageUrl($uri) {
        $url = file_create_url($uri);
        return $url;
    }
    public static function getListTerm($volname) {
        $vids = Vocabulary::loadMultiple();
        $arr = '';
        foreach ($vids as $vid) {
            if ($vid->label() == $volname) {
                $container = \Drupal::getContainer();
                $terms = $container->get('entity.manager')->getStorage('taxonomy_term')->loadTree($vid->id());
                if (!empty($terms)) {
                    foreach($terms as $term) {
                        $arr .= '<div data-filter=".cat_'.$term->tid.'" class="cbp-filter-item">';
                        $arr .= $term->name.'<div class="cbp-filter-counter"></div></div>';
                    }
                }
                break;
            }
        }
        return $arr;
    }
}
?>