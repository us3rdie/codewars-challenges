function humanReadable (seconds) {
    let hrs = seconds / 60 / 60;
    let min = (seconds / 60) - (hrs | 0) * 60;
    let sec = seconds - ( ((hrs | 0) * 60 * 60) + ((min | 0) * 60));
    

    console.log( ((hrs | 0) + ":"
                + (min | 0) + ":" 
                + (sec | 0)) )
    return '';
  }

humanReadable(0)//, '00:00:00', 'humanReadable(0)');
humanReadable(59)//, '00:00:59', 'humanReadable(59)');
humanReadable(60)// '00:01:00', 'humanReadable(60)');
humanReadable(90)//, '00:01:30', 'humanReadable(90)');
humanReadable(3599)//, '00:59:59', 'humanReadable(3599)');
humanReadable(3600)//, '01:00:00', 'humanReadable(3600)');
humanReadable(45296)//, '12:34:56', 'humanReadable(45296)');
humanReadable(86399)//, '23:59:59', 'humanReadable(86399)');
humanReadable(86400)//, '24:00:00', 'humanReadable(86400)');
humanReadable(359999)//, '99:59:59', 'humanReadable(359999)');