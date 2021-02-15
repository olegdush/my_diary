window.onload = function hi() {
      let day = document.getElementById("weekday");
      let dater = new Date();
      week = dater.getDay();
      console.log(week);

      // week = 4;

      if (week == 0) {
            week = week + 1
            week = "Понеділок";
            console.log(week);
            day.textContent = "Понеділок";
      }
      else if (week == 1) {
            week = week + 1
            week = "Вівторок";
            console.log(week);
            day.textContent = "Вівторок";
      } else if (week == 2) {
            week = week + 1
            week = "Середа";
            console.log(week);
            day.textContent = "Середа";
      } else if (week == 3) {
            week = week + 1
            week = "Четвер";
            console.log(week);
            day.textContent = "Четвер";
      }
      else if (week == 4) {
            week = week + 1
            week = "П'ятниця";
            console.log(week);
            day.textContent = "П'ятниця";
      }
      else if (week == 5) {
            week = 1
            week = "Понеділок";
            console.log(week);
            day.textContent = "Понеділок";
      }
      else if (week == 6) {
            week = 1
            week = "Понеділок";
            console.log(week);
            day.textContent = "Понеділок";
      }






      let urok1 = document.getElementById("urok1");
      let urok2 = document.getElementById("urok2");
      let urok3 = document.getElementById("urok3");
      let urok4 = document.getElementById("urok4");
      let urok5 = document.getElementById("urok5");
      let urok6 = document.getElementById("urok6");
      let urok7 = document.getElementById("urok7");
      let urok8 = document.getElementById("urok8");
      if (week == "Понеділок") {
            urok1.textContent = "Нім мова";
            urok1.href = "/uroky/deutch.html";
            urok2.textContent = "Англ мова";
            urok2.href = "/uroky/english.html";
            urok3.textContent = "Алгебра";
            urok3.href = "/uroky/algebra.html";
            urok4.textContent = "Хімія";
            urok4.href = "/uroky/ximia.html";
            urok5.textContent = "Укр мова";
            urok5.href = "/uroky/ukr-mowa.html";
            urok6.textContent = "Ф-ра";
            urok7.textContent = "Основи здоров`я";
            urok7.href = "/uroky/os-zdorovia.html";
            urok8.textContent = "Трудове";
      }
      if (week == "Вівторок") {
            urok1.textContent = "Укр мова";
            urok1.href = "/uroky/ukr-mowa.html";
            urok2.textContent = "Заруб літ";
            urok2.href = "/uroky/zarubizna.html";
            urok3.textContent = "Геометрія";
            urok3.href = "/uroky/geometria.html";
            urok4.textContent = "Укр літ";
            urok4.href = "/uroky/ukr-lit.html";
            urok5.textContent = "Ф-ра";
            urok6.textContent = "Географія";
            urok6.href = "/uroky/geographia.html";
            urok7.textContent = "Інформатика І";
            urok7.href = "/uroky/informatica.html";
            urok8.textContent = "нема";
      }
      if (week == "Середа") {
            urok1.textContent = "Алгебра";
            urok1.href = "/uroky/algebra.html";
            urok2.textContent = "Етика";
            urok2.href = "/uroky/etica.html";
            urok3.textContent = "Нім мова";
            urok3.href = "/uroky/deutch.html";
            urok4.textContent = "Англ мова";
            urok4.href = "/uroky/english.html";
            urok5.textContent = "Фізика";
            urok5.href = "/uroky/physik.html";
            urok6.textContent = "Біологія";
            urok6.href = "/uroky/biologia.html";
            urok7.textContent = "Музика";
            urok7.href = "/uroky/musik.html";
            urok8.textContent = "ГКК";
      }
      if (week == "Четвер") {
            urok1.textContent = "Укр мова";
            urok1.href = "/uroky/ukr-mowa.html";
            urok2.textContent = "Укр літ";
            urok2.href = "/uroky/ukr-lit.html";
            urok3.textContent = "Історія";
            urok3.href = "/uroky/history.html";
            urok4.textContent = "Англ мова/Алгебра";
            urok4.href = "/uroky/english.html";
            urok5.textContent = "Заруб літ";
            urok5.href = "/uroky/zarubizna.html";
            urok6.textContent = "Географія";
            urok6.href = "/uroky/geographia.html";
            urok7.textContent = "Інформатика ІІ";
            urok7.href = "/uroky/informatica.html";
            urok8.textContent = "нема";
      }
      if (week == "П'ятниця") {
            urok1.textContent = "Біологія";
            urok1.href = "/uroky/biologia.html";
            urok2.textContent = "Історія";
            urok2.href = "/uroky/history.html";
            urok3.textContent = "Фізика";
            urok3.href = "/uroky/physik.html";
            urok4.textContent = "Геометрія";
            urok4.href = "/uroky/geometria.html";
            urok5.textContent = "Укр мова/Хімія";
            urok5.href = "/uroky/ukr-mowa.html";
            urok6.textContent = "Образотворче";
            urok6.href = "/uroky/obrazotvorche.html";
            urok7.textContent = "Ф-ра";
            urok8.textContent = "нема";
      }



      let dz1 = document.getElementById("dz1");
      let dz2 = document.getElementById("dz2");
      let dz3 = document.getElementById("dz3");
      let dz4 = document.getElementById("dz4");
      let dz5 = document.getElementById("dz5");
      let dz6 = document.getElementById("dz6");
      let dz7 = document.getElementById("dz7");
      let dz8 = document.getElementById("dz8");



      let c = document.getElementById("red");








      c.textContent = "Редаговано: " + "2021.2.12, 16:15"
      // уроки
      dz1.textContent = "КОНТРОЛЬНА";
      dz2.textContent = "КОНТРОЛЬНА";
      dz3.textContent = "";
      dz4.textContent = "прочитати 194-196, дати відповіді на питання ст. 197.";
      dz5.textContent = "";
      dz6.textContent = "&38 пит. 4 ст. 155";
      dz7.textContent = "";
      dz8.textContent = "";



}


