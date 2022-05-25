
 
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Сoздаем ключ для хранилища
const KEY = "videoplayer-current-time"; 

const onPlay = function ({ seconds }) {
    // делает новую запись в хранилище
    localStorage.setItem(KEY, seconds);
};
// console.log(onPlay);
player.on('timeupdate', throttle (onPlay, 1000)); 

// возвращает из хранилища значение с ключом KEY
player.setCurrentTime(localStorage.getItem(KEY));
  
