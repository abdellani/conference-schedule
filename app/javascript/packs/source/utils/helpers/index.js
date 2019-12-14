const formatTime=(time)=> new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
export  {formatTime};