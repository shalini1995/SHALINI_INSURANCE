export class Citydetails
{
   setCity(city)
    {
		sessionStorage.setItem('cityname', city);
	}

	getCity()
	{
		let cityName=sessionStorage.getItem('cityname');
		return cityName;
	}
	setHotel(hotel)
	{
          sessionStorage.setItem('hotelname', hotel);
	}
	getHotel()
	{
         let hotelName=sessionStorage.getItem('hotelname');
		return hotelName;
	}
}