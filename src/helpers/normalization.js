import genreList from './genre';
import img from '../img/nofound.png';
const genreArr = genre_id => genre_id.map(el => genreList[`${el}`]).join(', ');
console.log(genreArr);
