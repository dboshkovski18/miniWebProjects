var vm = new Vue({
    el: '#app',
    data: {
        numbers: Array.from('123456789.0'),
        calculation: '',
        result: '',
        show:false
    },
    methods :{
        append : function (value) {
            this.calculation += value.toString();

        },
        calculate : function () {
            if(!(/[-+*/]/).test(this.calculation)){
                return ;
            }
                this.result = eval(this.calculation);
                this.calculation = eval(this.calculation).toString();
                this.show=true;

        },
        clear: function () {
            this.calculation=''
            this.result=''
        }
    },
    filters : {
        calculation : (value) => {
            return value.replaceAll("*"," x ").replaceAll('/',' / ').replaceAll('+'," + ").replaceAll('-',' - ');
        }
    }
})
