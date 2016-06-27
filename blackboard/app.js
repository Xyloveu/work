/**
 * Created by sks on 2016/6/27.
 */
(function () {

    function Main() {

        this._canvas = document.getElementById("canvas");

        var canvas = this._canvas;
        
        var cantext2d = this._canvas.getContext("2d");

        this._canvas.style.backgroundColor = "green";
        //this._canvas.addEventListener('mousemove', onMouseMove, false);
        this._canvas.addEventListener('mousedown', onMouseDown, false);
        document.addEventListener('mouseup', onMouseUp, false);

        function onMouseDown(event) {
            var e = event || window.event;
            this.x = e.pageX;
            this.y = e.pageY;
            //console.log(this.x,this.y);
            //cantext2d.beginPath();
            cantext2d.moveTo(this.x,this.y);
            canvas.addEventListener('mousemove', onMouseMove, false);

        }
        function onMouseMove(event) {
            var e = event || window.event;
            this.x = e.pageX;
            this.y = e.pageY;

            cantext2d.lineTo(this.x,this.y);

            cantext2d.stroke();

        }

        function onMouseUp(event) {
            var e = event || window.event;
            this.x = e.pageX;
            this.y = e.pageY;
            if(this.x > canvas.width || this.y > canvas.height){
                canvas.addEventListener('mousemove', onMouseMove, false);

            }

            canvas.removeEventListener('mousemove', onMouseMove, false);
        }


    }




    new Main();
})();