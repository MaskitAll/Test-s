'use strict';

var Vue = new Vue({
	el: '#contacts',
	data: {
        idGenerator: 0,

        contactLocal: [
            
        ],
        // contactVisible: false,

        contactList: [
            {
                contactVisible: false,
                id: "01",
                
                data: {
                    name: "Maksim",
                    num: "89922211223"
                }
            },
            {
                contactVisible: false,
                id: "02",
                
                data: {
                    name: "Maria",
                    num: "23211223"
                }
            },
            {
                contactVisible: false,
                id: "03",
                
                data: {
                    name: "Anna",
                    num: "74529478"
                }
            },

    ],

    },

    methods: {
        deleteContact: function(contact){
            if(confirm("Удалить контакт?")){
                this.contactList.splice(this.contactList.findIndex(findContact => findContact === contact), 1); 
                console.log("deleted");  
            } 
        },

        addContact: function(){
            var name = document.contactAddForm.name.value;
            var num = document.contactAddForm.num.value;

            this.contactList.push({id: this.idGenerator++, name: name, num: num});
            console.log("added");
        },

        showInfo: function(contact){
            contact.contactVisible = true;
            this.contactLocal = contact;
            // console.log(contact.contactVisible);
            // contact.contactVisible = false;

            // this.contactLocal = contact;
            // var info = document.querySelector("#infoBlock");
            // info.classList.toggle("visible");
        },

        hideInfo: function(){
            this.contactLocal.contactVisible = false;
            this.contactList[this.contactList.findIndex(findContact => findContact === this.contactLocal)] = this.contactLocal;
            
        },

        toggleInfo: function(dataName){
            const data = prompt("Заменить значение поля " + dataName + ": ");
            // console.log(contact);
            if(data){
                this.contactLocal.data[dataName] = data;
                console.log("Изменено");}
            else { 
                console.log("Осталось как было.");
            }
        },

        addInfo: function(){
            const newData = prompt("Добавить поле");
            if(!newData) return;
            var dataName = newData.slice(0, newData.indexOf(":"));
            var dataValue = newData.slice(newData.indexOf(":") + 1);

            // if(data){
                this.contactLocal.data[dataName] =  dataValue;
                console.log("Добавено.");
            // }
            // else { 
            //     console.log("Осталось как было.");
            // }
        },


    }

});