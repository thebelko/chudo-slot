import polyfills from './libraries/polyfills';

import "components/slider/slider";

'use strict';

$(() => {
    polyfills.init();

});

$(document).ready(function(){
    $('#show-more').click(function() {
        event.preventDefault();
        $('#more-slots').slideDown(2000);
        $(this).hide();
    });
});

var start = 1000000 ;
function add_counter() {

    var invervat = 2 ;
    var end = 10 ;

    if(start < end) {
        start += invervat ;
        $('#js-count').html(start);
    } else {
        start += 4 ;
        $('#js-count').html(start)
    }

}

var timerId = setInterval(add_counter, 3000) ;


var remain_bv   = 110584;
function parseTime_bv(timestamp){
    if (timestamp < 0) timestamp = 0;

    var day = Math.floor( (timestamp/60/60) / 24);
    var hour = Math.floor(timestamp/60/60);
    var mins = Math.floor((timestamp - hour*60*60)/60);
    var secs = Math.floor(timestamp - hour*60*60 - mins*60);
    var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );

    $('span.afss_day_bv').text(day);
    $('span.afss_hours_bv').text(left_hour);

    if(String(mins).length > 1)
        $('span.afss_mins_bv').text(mins);
    else
        $('span.afss_mins_bv').text("0" + mins);
    if(String(secs).length > 1)
        $('span.afss_secs_bv').text(secs);
    else
        $('span.afss_secs_bv').text("0" + secs);

}

$(document).ready(function(){
    setInterval(function(){
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
        if(remain_bv <= 0){
            alert('Hello');
        }
    }, 1000);
});
