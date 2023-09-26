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

//ページの読み込みが完了したら実行
document.addEventListener("DOMContentLoaded", function(){
    //開催日時を数値化
    let targetDate = new Date(2024, 0, 6, 11); 
    // Year / Month / Day / Hour
    let dnumTarget = targetDate.getTime();

function showCountDown(){
    //カウントダウン要素の取得
    let countdown = document.getElementById("countdown");

    //現在日時を数値化
    let nowDate = new Date();
    let dnumNow = nowDate.getTime();
    
    // 表示を準備
    //let dlYear  = targetDate.getFullYear();
    //let dlMonth = targetDate.getMonth() + 1;
    //let dlDate  = targetDate.getDate();
    //let dlHour  = targetDate.getHours();
    //let dlMin   = targetDate.getMinutes();
    //let dlSec   = targetDate.getSeconds();

    //開催日までの時間を計算
    let diff2Dates = dnumTarget - dnumNow;

    if(diff2Dates > 0){
        //残り時間がある場合カウントダウンを表示
        let dDays = Math.floor(diff2Dates / ( 1000 * 60 * 60 * 24 )); // 日数
        diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
        let dHour = Math.floor(diff2Dates / ( 1000 * 60 * 60 )); // 時間
        diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
        let dMin = Math.floor(diff2Dates / ( 1000 * 60 )); // 分
        diff2Dates = diff2Dates % ( 1000 * 60 );
        let dSec = Math.floor(diff2Dates / 1000); // 秒
        
        //表示
        countdown.innerHTML = Math.floor(dDays) + " DAYS " + Math.floor(dHour) + " HOURS " + Math.floor(dMin) + " MINS " + Math.floor(dSec) + " SECS!!";
    }else{
        countdown.innerHTML = "Event was over!";
    }

}

//ページ読み込み時にカウントダウンを表示
showCountDown();

//1秒ごとにカウントダウンを更新
setInterval(showCountDown,1000);

});