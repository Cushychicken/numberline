function drawNumberLine(startno, endno) {    
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var w = c.width  = $(window).width();
  var h = c.height = 400;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.beginPath();
  ctx.moveTo(w/10, h/2);
  ctx.lineTo(9*w/10, h/2);
  ctx.stroke();

  var diff  = (endno - startno);
  var spacing = (8 * (w/10)) / diff;

  for(var i = 0;i <= diff; i++) {
    ctx.beginPath();
    strokeStyle = '#0f0';
    lineWidth = 2;
    // Draws vertical hashes in number line and adds number labels
    ctx.moveTo((w/10 + i * spacing), h/2 - 10);
    ctx.lineTo((w/10 + i * spacing), h/2 + 10);
    ctx.fillStyle = '#000';
    ctx.font = "12px Verdana";
    ctx.fillText(String(startno + i) ,(w/10 + i * spacing)- 5, h/2 + 35);
    if(!i) {
      lineWidth = 4;
      strokeStyle = '#f0f';
    }
    ctx.fill();
    ctx.stroke();
  }
}

function drawFractionNumberLine(startmain, startfrac, endmain, endfrac, base) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var w = c.width  = $(window).width();
  var h = c.height = 400;

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.beginPath();
  ctx.moveTo(w/10, h/2);
  ctx.lineTo(9*w/10, h/2);
  ctx.stroke();

  var startno = (startmain * base) + startfrac;
  var endno   = (endmain * base)   + endfrac;

  var diff  = (endno - startno);
  var spacing = (8 * (w/10)) / diff;

  for(var i = 0;i <= diff; i++) {
    ctx.beginPath();
    strokeStyle = '#0f0';
    lineWidth = 2;
    // Draws vertical hashes in number line and adds number labels
    ctx.moveTo((w/10 + i * spacing), h/2 - 10);
    ctx.lineTo((w/10 + i * spacing), h/2 + 10);
    ctx.fillStyle = '#000';
    ctx.font = "12px Verdana";

    var modulus   = Math.floor((startno + i)/base);
    var remainder = (startno + i) % base;
    
    var formatstring = '';
    if (remainder != 0) {
      formatstring = String(modulus) + ' ' + String(remainder) + "/" + String(base);
      ctx.fillText(String(formatstring) ,(w/10 + i * spacing) - 10, h/2 + 35);
    } else {
      formatstring = String(modulus);
      ctx.fillText(String(formatstring) ,(w/10 + i * spacing) - 5, h/2 + 35);
    }

    
    if(!i) {
      lineWidth = 4;
      strokeStyle = '#f0f';
    }
    ctx.fill();
    ctx.stroke();
  }
}

$( "#drawWhole" ).click( function() {
  var startno = Number(document.getElementById("StartNo").value);
  var endno   = Number(document.getElementById("EndNo").value);
  drawNumberLine(startno, endno);
});

$( "#drawFrac" ).click( function() {
  var startmain = Number(document.getElementById("StartMain").value);
  var startfrac = Number(document.getElementById("StartFrac").value);
  var endmain   = Number(document.getElementById("EndMain").value);
  var endfrac   = Number(document.getElementById("EndFrac").value);
  var fracbase  = Number(document.getElementById("FracBase").value);
  drawFractionNumberLine(startmain, startfrac, endmain, endfrac, fracbase);
});

$( window ).resize( function() {
  var startno = Number(document.getElementById("StartNo").value);
  var endno   = Number(document.getElementById("EndNo").value);
  drawNumberLine(startno, endno);

  $( "#menuSelect" ).width = ($(window).width() * 0.8);
});

$( document ).ready( function() {
  drawNumberLine(-10, 10);
  var canvas = document.getElementById("myCanvas")
  var image  = canvas.toDataURL('image/jpeg');
  $( "#downloadLnk1" ).attr('href', image);
  $( "#downloadLnk2" ).attr('href', image);
});

$( "#downloadLnk1 ").click( function() {
  var canvas = document.getElementById("myCanvas")
  var image  = canvas.toDataURL('image/jpeg');
  $( "#downloadLnk1" ).attr('href', image);
})

$( "#downloadLnk2 ").click( function() {
  var canvas = document.getElementById("myCanvas")
  var image  = canvas.toDataURL('image/jpeg');
  $( "#downloadLnk2" ).attr('href', image);
})

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 