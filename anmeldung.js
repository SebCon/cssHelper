
var checkInput = function(e) {
  var elem = (e.srcElement || e.target);
  if (elem && elem.id) {
    if (flagging[elem.id] !== undefined && !flagging[elem.id]) {
      flagging[elem.id] = true;
    } else {
      flagging[elem.id] = false;
    }

    if (mapping && mapping[elem.id] && mapping[elem.id]) {
      var temp = document.getElementById(mapping[elem.id]);
      if (temp && temp.value !== undefined && temp.value !== null && (temp.value === '' || !flagging[temp.id])) {
        temp.value = elem.value;

      }
    }
  }
};


document.addEventListener('keyup', function(e) {
    checkInput(e);
  }
);

document.getElementById('tanzahl').addEventListener('change', function(e) {
  var elem = document.getElementById('betrag');
  var target = document.getElementById('tanzahl');
  if (target.value !== undefined && target.value >= 0) {
    var brutto = parseInt(target.value) * parseInt(BETRAG);
    var mwst = brutto - (brutto / MWST);
    var erg = Math.round(mwst * 100) / 100 ;
    elem.value = 'Rechnungsbetrag: '+ brutto + ' EUR (Brutto, inkl. ' + erg + ' EUR MwSt.)';
  }
});


var elemA = document.getElementById('tanzahl');
if (elemA) {
  var options = '';
  for (var i=1; i <= 6; i++) {
    options += '<option value="' + i + '">'+i+' Teilnehmer - '+(parseInt(BETRAG * i))+' &euro; (Bruttobetrag)</option>\n';
  }
  elemA.innerHTML = options;
  var event = new Event('change');
  elemA.dispatchEvent(event);
}

var mapping = {
  'name1' : 'name2'
};

var flagging = {
  'name2' : false
};
