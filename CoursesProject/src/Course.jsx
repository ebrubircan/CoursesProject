import Angular from './assets/angular.jpg';
import Bootstrap from './assets/bootstrap5.png';
import Ccsharp from './assets/ccsharp.png';
import KompleWeb from './assets/kompleweb.jpg';

const courseMap = {
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb
    // Angular: Angular,
    // Bootstrap: Bootstrap,
    // Ccsharp: Ccsharp,
    // KompleWeb: KompleWeb şeklinde de yazılabilirdi fakat key value değerleri aynı olduğu için tek taraflı yazıldı.
    // const courseArray = [ 'Angular', 'Bootstrap', 'Ccsharp', 'KompleWeb' ]; buradaki key değerleri yukarıdakiler value değerleri
}

function Course( {courseName} ) {
    console.log(courseMap[courseName]);
    return ( <div>
        <img src={courseMap[courseName]} alt="course" />
    </div> );
}

export default Course;