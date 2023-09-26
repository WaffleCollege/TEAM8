'use strict'
// Please don't delete the 'use strict' line above

//カウントダウン

function set2fig(num){
    //数値が1桁だったら2桁にして返す
    let ret;
    if(num < 10){
        ret = "0" + num; 
    } else {
        ret = num;
    }
    return ret;
}

function showCountDown(){
    //現在日時を数値化
    let nowDate = new Date();
    let dnumNow = nowDate.getTime();

    let targetDate = new Date(2023, 9, 22, 19); 
    // Year / Month / Day / Hour
    let dnumTarget = targetDate.getTime();
    
    // 表示を準備
    let dlYear  = targetDate.getFullYear();
    let dlMonth = targetDate.getMonth() + 1;
    let dlDate  = targetDate.getDate();
    let dlHour  = targetDate.getHours();
    let dlMin   = targetDate.getMinutes();
    let dlSec   = targetDate.getSeconds();
    let msg1 = "開催日の" + dlYear + "/" + dlMonth + "/" + dlDate + " " + set2fig(dlHour) + ":" + set2fig(dlMin) + ":" + set2fig(dlSec);

    //開催日までの時間を計算
    let diff2Dates = dnumTarget - dnumNow;
    if(diff2Dates < 0){
        diff2Dates = 0;
    }

    // 差のミリ秒を、日数・時間・分・秒に分割
    let dDays = Math.floor(diff2Dates / ( 1000 * 60 * 60 * 24 )); // 日数
    diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
    let dHour = Math.floor(diff2Dates / ( 1000 * 60 * 60 )); // 時間
    diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
    let dMin = Math.floor(diff2Dates / ( 1000 * 60 )); // 分
    diff2Dates = diff2Dates % ( 1000 * 60 );
    let dSec = Math.floor(diff2Dates / 1000); // 秒

    let msg2 = Math.floor(dDays) + " DAYS " + Math.floor(dHour) + " HOURS " + Math.floor(dMin) + " MINS " + Math.floor(dSec) + " SECS ";

    //表示
    let msg;
    if(diff2Dates > 0){
        msg =msg2 + "!";
    }else {
        msg = "Event was over!";
    }

    let countdown = document.getElementById("countdown");
    countdown.innerHTML = msg;

}

setInterval(showCountDown,1000);