import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Map, MapMarker, CustomOverlayMap, MapInfoWindow } from 'react-kakao-maps-sdk';
import { fetchKakao } from '../../store/kakao/kakaoSlice'
import { RestaurantModal } from '../../components';
import { modalState } from '../../store/modal/restaurantModalSlice';

const Home = () => {
	const {mapList, restaurant} = useAppSelector(state => state.kakao)
	const {restaurantModal} = useAppSelector(state=>state.restaurantModal)
	
	const [modalOpen, setModalOpen] = useState(0);
	//console.log("data>>", restaurant);
	const dispatch = useAppDispatch()

	useEffect(() => {
	  dispatch(fetchKakao());  
  }, [])

  	const openModal = (id:number) => {
		dispatch(modalState(true))
		setModalOpen(id);
	}

	const locations = [  //마커 띄우기위해서 필요한 데이터 구조 예시
		{ title: '산골', latlng: { lat: 37.484137, lng: 126.954205 } },
		{ title: '생태연못', latlng: { lat: 33.450936, lng: 126.569477 } },
		{ title: '텃밭', latlng: { lat: 33.450879, lng: 126.56994 } },
		{ title: '근린공원', latlng: { lat: 33.451393, lng: 126.570738 } },
	];

  const [location, setLoacation] = useState({"latitude":0, "longitude":0}); // 현재 위치를 저장할 상태

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(successHandler, errorHandler); // 성공시 successHandler, 실패시 errorHandler 함수가 실행된다.
	}, []);

	const successHandler = (response:any) => {
		console.log(response); // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
		const { latitude, longitude } = response.coords;
		setLoacation({ latitude, longitude });
	};

	const errorHandler = (error:any) => {
		console.log(error);
	};

 
  return (
	<>
    <Map
      center={{ lat: 37.484137, lng: 126.954205 }}
      style={{ width: "100%", height: "90%", marginTop:"5px"}}
      level={3} 
    >
		{mapList.map((loc, idx) => (
			<MapMarker
				key={`${loc.title}-${loc.latlng}`}
				position={loc.latlng}
				image={{
					src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
					size: { width: 24, height: 35 },
				}}
				title={loc.title}
          		clickable={true} 
				onClick={()=>{openModal(loc.id)} }
				>
          		<div style={{ padding: "5px", color: "#000"}}>
           			{loc.title} <br />
          		</div>
        	</MapMarker>
			))}
		 {restaurantModal && <RestaurantModal item={restaurant.filter(data => data.id==modalOpen)}/>}	
		 	<MapMarker position={{ lat: location.latitude, lng: location.longitude }} />
    </Map>
	</>
  )
}

export default Home