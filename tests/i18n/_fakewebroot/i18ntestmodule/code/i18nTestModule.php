<?php
class i18nTestModule extends DataObject implements TestOnly
{
    
    public static $db = array(
        'MyField' => 'Varchar',
    );
    
    public function myMethod()
    {
        _t(
            'i18nTestModule.ENTITY',
            'Entity with "Double Quotes"',
            PR_LOW,
            'Comment for entity'
        );
    }
}
class i18nTestModule_Addition extends Object
{
    public function myAdditionalMethod()
    {
        _t('i18nTestModule.ADDITION', 'Addition');
    }
}
