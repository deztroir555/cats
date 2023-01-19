(function($){

    $('.pack-block').each(function(){
        var choosePack = new funbox.ChoosePack({
            $packElem: $(this),
            $selectElem: $(this).find('.js-select-pack'),
            selectedClass: 'pack-block--selected',
            disabledClass: 'pack-block--disabled'
        });
        choosePack.init();
    });

})(jQuery);