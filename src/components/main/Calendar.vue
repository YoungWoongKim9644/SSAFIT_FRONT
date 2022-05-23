<template>
  <div class="calContainer">
      <div class="calCalendar">
        <div class="month">
<<<<<<< HEAD
          <i class="fas fa-angle-left prev"></i>
=======
          <i class="prev"><</i>
>>>>>>> release
          <div class="date">
            <h1></h1>
            <p></p>
          </div>
<<<<<<< HEAD
          <i class="fas fa-angle-right next"></i>
=======
          <i class="next">></i>
>>>>>>> release
        </div>
        <div class="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div class="days" v-html="days"></div>
      </div>
    </div>
</template>

<script>
export default {

  data(){
    return{
<<<<<<< HEAD
=======
      thisweek : [],
>>>>>>> release
      days : ''
    }
  },

  mounted(){
    const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

<<<<<<< HEAD
=======
  //31
>>>>>>> release
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

<<<<<<< HEAD
=======
  //30
>>>>>>> release
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

<<<<<<< HEAD
  const firstDayIndex = date.getDay();

=======
  //1
  const firstDayIndex = date.getDay();

  //2
>>>>>>> release
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
<<<<<<< HEAD

=======
  //4
>>>>>>> release
  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
<<<<<<< HEAD
=======
      const day = new Date().getDay()
      for(let x = 0; x <= day; x++){
        this.thisweek.push({day : x, date : i - day + x})
      }
      for(let x = day + 1; x < 7; x++){
        this.thisweek.push({day : x, date : i + (x - day)})
      }
      console.log(this.thisweek)
      this.$store.dispatch("thisWeek", this.thisweek)
>>>>>>> release
      days += `<div><div class="today">${i}</div></div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  this.days = days
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
  },

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

template {
  font-size: 62.5%;
}

.calContainer {
  width: 100%;
  height: 100vh;
  background-color: #d2f1e0;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calCalendar {
  width: 70rem;
  height: 52rem;
  background-color: #dfc2d4;
  box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.4);
}

.month {
  width: 100%;
  height: 10rem;
  background-color: #637fbb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
}

.month i {
  font-size: 2.5rem;
  cursor: pointer;
}

.month h1 {
  font-size: 5rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}

.month p {
  font-size: 1.6rem;
}

.weekdays {
  width: 100%;
  height: 5rem;
  padding: 0 0.4rem;
  display: flex;
  align-items: center;
}

.weekdays div {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  width: calc(70rem / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
}

.days {
  color: rgb(0, 0, 0);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.days div:not(.today) {
  border-style: solid;
  font-size: 1.4rem;
  margin: 0.3rem;
  padding-left: 1rem;
  width: calc(65rem / 7);
  height: 5rem;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
  transition: background-color 0.2s;
}

.days div:hover:not(.today) {
  background-color: #262626;
  border: 0.2rem solid #777;
  cursor: pointer;
}

.prev-date,
.next-date {
  opacity: 0.5;
}

.today {
  margin: 0.2rem 0;
  padding:0 0.3rem;
  border-radius: 40px 40px;
  border-style: none;
  width:fit-content;
  height:fit-content;
  background-color: #51b88b;
}
</style>