function point(point) {
    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) 
      {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
      return "";
    }
    var q = (window.goldlog_queue || (window.goldlog_queue = []));
    q.push({
        action: 'goldlog.setPageSPM',
        arguments: ['5176', point]    // spmAÕ¾µã   spmBÒ³Ãæµã
    });
    q.push({
        action: 'goldlog.sendPV',
        arguments: [{
        is_auto: false
        }, {
            yunpk: encodeURI(getCookie('login_aliyunid_pk')), // Optional params 
            yunid: encodeURI(getCookie('login_aliyunid')),  // Optional params
        }]
    });
  }