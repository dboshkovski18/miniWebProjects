const profesii = ["Водоинсталетер" , "Оџачар", "Електричар", "Градинар", "Вулканизер"];
const gradovi = ["Скопје", "Битола" , "Струмица", "Штип", "Велес", "Тетово"];

const vraboteni = [ {name: "Васко Васковски" , city : "Скопје", profession: "Водоинсталетер"},
                    {name: "Мирко Мирковски" , city : "Битола", profession: "Градинар"},
                    {name: "Сашко Сашковски" , city : "Струмица", profession: "Вулканизер"},
                    {name: "Панчо Панчовски" , city : "Штип", profession: "Електричар"},
                    {name: "Љубе Љубевски" , city : "Битола", profession: "Оџачар"},
                    {name: "Марко Марковски" , city : "Струмица", profession: "Електричар"},
                    {name: "Кире Киревски" , city : "Тетово", profession: "Вулканизер"},
                    {name: "Иван Ивановски" , city : "Велес", profession: "Електричар"}];

var app = new Vue({
    el : "#app",
    data : {
        cities : [],
        professions:[],
        employees : [],
        topFour: [],
        show: false
    },
    mounted() {
        this.initialize();
    },
    methods : {
        initialize : function () {
            this.cities = gradovi;
            this.professions = profesii;
            this.employees = vraboteni;
            this.pickFour();
        },
        pickFour : function () {

            for(i = 0; i<4 ; i++){
                this.topFour.push(this.employees[Math.floor(Math.random()*this.employees.length)]);
            }
        },
        search : function () {
            this.show = !this.show;
        }
    }
});

