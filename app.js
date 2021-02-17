window.onload = function hi() {
      let ukr_mowa = "&31"; //укр мова
      let ukr_lit = "ст 98-99"; //укр літ
      let zarub_lit = "контрольна"; //заруб
      let etika = "вивчити з біблії"; //етика
      let english = "впр 3 ст 112"; //англ
      let deutch = "впр 4 ст 106"; //нім
      let algebra = "№708, 710 &2 п. 19, самостійна"; //алгебра
      let geometria = "&3 п16-18, №457, 458, 465";//геометрія
      let inform = "нічого";//інформатика
      let history = "КОНТРОЛЬНА"//історія
      let geographia = "КОНТРОЛЬНА";//географія
      let biologia = "&30";//біологія
      let physik = "нічого";//фізика
      let ximia = "практична";//хімія
      let musik = "вивчити про: Софію Ротару, Джамалу, Алла Пугочова";//музика
      let os_zdor = "нічого";//основи зд
      let ob_mys = "малюнок до твору лесі українки";//образотворче



      let day = document.getElementById("weekday");
      let dater = new Date();
      week = dater.getDay();
      console.log(week);

      // week = 3;

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

      let dz1 = document.getElementById("dz1");
      let dz2 = document.getElementById("dz2");
      let dz3 = document.getElementById("dz3");
      let dz4 = document.getElementById("dz4");
      let dz5 = document.getElementById("dz5");
      let dz6 = document.getElementById("dz6");
      let dz7 = document.getElementById("dz7");
      let dz8 = document.getElementById("dz8");



      if (week == "Понеділок") {
            urok1.textContent = "Нім мова";
            urok1.href = "deutch.html";
            dz1.textContent = deutch;
            urok2.textContent = "Англ мова";
            urok2.href = "english.html";
            dz2.textContent = english;
            urok3.textContent = "Алгебра";
            urok3.href = "algebra.html";
            dz3.textContent = algebra;
            urok4.textContent = "Хімія";
            urok4.href = "ximia.html";
            dz4.textContent = ximia;
            urok5.textContent = "Укр мова";
            urok5.href = "ukr-mowa.html";
            dz5.textContent = ukr_mowa;
            urok6.textContent = "Ф-ра";
            urok7.textContnt = "Основи здоров`я";
            urok7.href = "os-zdorovia.html";
            dz7.textContent = os_zdor;
            urok8.textContent = "Трудове";
      }
      if (week == "Вівторок") {
            urok1.textContent = "Укр мова";
            urok1.href = "ukr-mowa.html";
            dz1.textContent = ukr_mowa;
            urok2.textContent = "Заруб літ";
            urok2.href = "zarubizna.html";
            dz2.textContent = zarub_lit;
            urok3.textContent = "Геометрія";
            urok3.href = "geometria.html";
            dz3.textContent = geometria;
            urok4.textContent = "Укр літ";
            urok4.href = "ukr-lit.html";
            dz4.textContent = ukr_lit;
            urok5.textContent = "Ф-ра";
            urok6.textContent = "Географія";
            urok6.href = "geographia.html";
            dz6.textContent = geographia;
            urok7.textContent = "Інформатика І";
            urok7.href = "informatica.html";
            dz7.textContent = inform;
            urok8.textContent = "нема";
      }
      if (week == "Середа") {
            urok1.textContent = "Алгебра";
            urok1.href = "algebra.html";
            dz1.textContent = algebra;
            urok2.textContent = "Етика";
            urok2.href = "etica.html";
            dz2.textContent = etika;
            urok3.textContent = "Нім мова";
            urok3.href = "deutch.html";
            dz3.textContent = deutch;
            urok4.textContent = "Англ мова";
            urok4.href = "english.html";
            dz4.textContent = english;
            urok5.textContent = "Фізика";
            urok5.href = "physik.html";
            dz5.textContent = physik;
            urok6.textContent = "Біологія";
            urok6.href = "biologia.html";
            dz6.textContent = biologia;
            urok7.textContent = "Музика";
            urok7.href = "musik.html";
            dz7.textContent = musik;
            urok8.textContent = "ГКК";
      }
      if (week == "Четвер") {
            urok1.textContent = "Укр мова";
            urok1.href = "ukr-mowa.html";
            dz1.textContent = ukr_mowa;
            urok2.textContent = "Укр літ";
            urok2.href = "ukr-lit.html";
            dz2.textContent = ukr_lit;
            urok3.textContent = "Історія";
            urok3.href = "history.html";
            dz3.textContent = history;
            urok4.textContent = "Англ мова/Алгебра";
            urok4.href = "english.html";
            dz4.textContent = english;
            urok5.textContent = "Заруб літ";
            urok5.href = "zarubizna.html";
            dz5.textContent = zarub_lit;
            urok6.textContent = "Географія";
            urok6.href = "geographia.html";
            dz6.textContent = geographia;
            urok7.textContent = "Інформатика ІІ";
            urok7.href = "informatica.html";
            dz7.textContent = inform;
            urok8.textContent = "нема";
      }
      if (week == "П'ятниця") {
            urok1.textContent = "Біологія";
            urok1.href = "biologia.html";
            dz1.textContent = biologia;
            urok2.textContent = "Історія";
            urok2.href = "history.html";
            dz2.textContent = history;
            urok3.textContent = "Фізика";
            urok3.href = "physik.html";
            dz3.textContent = physik;
            urok4.textContent = "Геометрія";
            urok4.href = "geometria.html";
            dz4.textContent = geometria;
            urok5.textContent = "Укр мова/Хімія";
            urok5.href = "ukr-mowa.html";
            dz5.textContent = ukr_mowa;
            urok6.textContent = "Образотворче";
            urok6.href = "obrazotvorche.html";
            dz6.textContent = ob_mys;
            urok7.textContent = "Ф-ра";
            urok8.textContent = "нема";
      }










}


