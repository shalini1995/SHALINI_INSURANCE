export class Citydetails
{
   setCity(city){
		sessionStorage.setItem('cityname', city);
	}

	getCity(){
		let cityName=sessionStorage.getItem('cityname');
		return cityName;
	} 
}