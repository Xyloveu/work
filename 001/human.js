/**
 * Created by sks on 2016/6/15.
 */


(function () {

    function human(name) {
        var self = {};

        self.name = name;

        self.sayHellow = function () {
            console.log(self.name+" say hellow");
            
        }
        return self;
    }

    window.human = human;
}());