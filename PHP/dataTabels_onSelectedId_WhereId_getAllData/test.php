<?php

function array_merge_recursive_simple() {

    if (func_num_args() < 2) {
        trigger_error(__FUNCTION__ .' needs two or more array arguments', E_USER_WARNING);
        return;
    }
    $arrays = func_get_args();
    $merged = array();
    while ($arrays) {
        $array = array_shift($arrays);
        if (!is_array($array)) {
            trigger_error(__FUNCTION__ .' encountered a non array argument', E_USER_WARNING);
            return;
        }
        if (!$array)
            continue;
        foreach ($array as $key => $value)
            if (is_string($key))
                if (is_array($value) && array_key_exists($key, $merged) && is_array($merged[$key]))
                    $merged[$key] = call_user_func(__FUNCTION__, $merged[$key], $value);
                else
                    $merged[$key] = $value;
            else
                $merged[] = $value;
    }
    return $merged;
}


$a1 = array(
    88 => 1,
    'foo' => 2,
    'bar' => array(4),
    'x' => 5,
    'z' => array(
        6,
        'm' => 'hi',
    ),
);
$a2 = array(
    99 => 7,
    'foo' => array(8),
    'bar' => 9,
    'y' => 10,
    'z' => array(
        'm' => 'bye',
        11,
    ),
);
$a3 = array(
    'z' => array(
        'm' => 'ciao',
    ),
);
echo "<pre>";
print_r(array_merge($a1, $a2, $a3));
echo "<hr>";
print_r(array_merge_recursive_simple($a1, $a2, $a3));
echo "<hr>";
print_r(array_merge_recursive($a1, $a2, $a3));
echo "</pre>";

?>