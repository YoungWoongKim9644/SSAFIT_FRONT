<template>
  <div class="calContainer">
      <div class="calCalendar">
        <div class="month">
          <i class="prev">&#128072;</i>
          <div class="date">
            <h1></h1>
            <p></p>
          </div>
          <i class="next">&#128073;</i>
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
import {mapState} from 'vuex'

export default {

  data(){
    return{
      thisweek : [],
      days : ''
    }
  },

  mounted(){
    const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  //31
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  //30
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  //1
  const firstDayIndex = date.getDay();

  //2
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  //4
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
    days += `<div class="prev-date n${prevLastDay - x + 1}">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class=" n${i}"><div class="today">${i}</div>
      </div>`;
    } else {
      days += `<div class=" n${i}">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date n${j}">${j}</div>`;
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


  const renderTodos = () => {

     const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

     for(let x = 1; x <= lastDay; x++){
    let tmpArr = this.totalTodos.filter((elem) => {
      let d = `${x >= 10 ? x : '0' + x}` 
      if(elem.date.substring(8,10) === d){
      return true;  
    }
    })
    for(let j = 0 ; j < tmpArr.length; j++){
    document.querySelector(".n" + `${x}`).innerHTML += 
    `<div class="star"></div>`
    }
  }

  }
  
  this.$nextTick(renderTodos)

  },

computed:{
  ...mapState(["totalTodos"])
},

beforeUpdate(){

}

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
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.calCalendar {
  width: 70rem;
  height: 52rem;
  background-color: #575ca394;
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

.days div:not(.today):not(.star){
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

.days div:hover:not(.today):not(.star){
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

.star{
  margin: 2.5rem 2px;
  padding:0 0.3rem;
  border-radius: 40px 40px;
  border-style: none;
  width:20px;
  height:20px;
  background-color: pink;
}
</style>