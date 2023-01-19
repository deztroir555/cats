var funbox = {};


funbox.ChoosePack = function(options) {
    var $packElem = options.$packElem,
        $selectElem = options.$selectElem,
        self = this;

    this.isSelect = false;

    this.init = function() {

        if($packElem.hasClass(options.selectedClass)) {
            this.isSelect = true;
        }

        $selectElem.on('click', function(e) {

            if($packElem.hasClass(options.disabledClass)) return;

            e.preventDefault();

            if(self.isSelect) {
                self.unselectPack();
            } else {
                self.selectPack();
            }

        });
    };


    this.selectPack = function() {
        this.isSelect = true;
        $packElem.on('mouseleave.choosepack', function(e) {
            $packElem.addClass(options.selectedClass);
        });
    };

    this.unselectPack = function() {
        this.isSelect = false;
        $packElem.removeClass(options.selectedClass);
        $packElem.off('mouseleave.choosepack');
    };
};