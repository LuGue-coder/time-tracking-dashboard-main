let local_data;

function update_data_daily(data) {
  for (i = 0; i < data.length; i++) {
    label_id = "data_" + data[i].title;
    document.getElementById(label_id).innerHTML =data[i].timeframes.daily.current;
    label_id = "data_past_" + data[i].title;
    document.getElementById(label_id).innerHTML =data[i].timeframes.daily.previous;
  }
  document.getElementById("btn_daily").classList.add("active");
  document.getElementById("btn_weekly").classList.remove("active");
  document.getElementById("btn_monthly").classList.remove("active");
}
function update_data_weekly(data) {
  for (i = 0; i < data.length; i++) {
    label_id = "data_" + data[i].title;
    document.getElementById(label_id).innerHTML =data[i].timeframes.weekly.current;
    label_id = "data_past_" + data[i].title;
    document.getElementById(label_id).innerHTML =data[i].timeframes.weekly.previous;
  }
  document.getElementById("btn_weekly").classList.add("active");
  document.getElementById("btn_daily").classList.remove("active");
  document.getElementById("btn_monthly").classList.remove("active");
}
function update_data_monthly(data) {
  for (i = 0; i < data.length; i++) {
    label_id = "data_" + data[i].title;
    document.getElementById(label_id).innerHTML =data[i].timeframes.monthly.current;
    label_id = "data_past_" + data[i].title;
    document.getElementById(label_id).innerHTML =data[i].timeframes.monthly.previous;
  }
  document.getElementById("btn_monthly").classList.toggle("active");
  document.getElementById("btn_weekly").classList.remove("active");
  document.getElementById("btn_daily").classList.remove("active");
}

fetch('data.json').then((response) => {  
  if(!response.ok) return console.log("Oops. There was a problem there.");
  return response.json();
}).then((data) => {
  console.log(data);
  local_data = data;
  update_data_daily(local_data);
});

const buttonDaily = document.getElementById("btn_daily");
buttonDaily.addEventListener("click", (e) => update_data_daily(local_data));
const buttonWeekly = document.getElementById("btn_weekly");
buttonWeekly.addEventListener("click", (e) => update_data_weekly(local_data));
const buttonMonthly = document.getElementById("btn_monthly");
buttonMonthly.addEventListener("click", (e) => update_data_monthly(local_data));


