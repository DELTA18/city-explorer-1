import React from 'react';
import '../../styles/popup.css';

const Detailedhotel = (props) => {
    function handleClose() {
        props.settrigger(false);
    }

    function handlePopupClick(event) {
        event.stopPropagation();
    }

    return props.trigger ? (
        <div className='popup' onClick={handlePopupClick}>
            <div className='popup-inner'>
                <div className='popup-inner-left'>
                    <img src= {props.img} className='popup-img' alt='img'/>
                    <label>{props.city}</label>
                </div>

                <div className='popup-inner-right'>
                <h1 className='popup-name pp'> <b>{props.name} </b></h1>
                <label className='popup-address pp'> 
                <span className="material-symbols-outlined">
                    location_on
                </span>
                {props.address} </label>
                <label className='popup-rating pp'> Ratings:{props.rating} </label>
                <label className='popup-type pp'> {props.type}, {props.type2} </label>
                <label className='popup-vej pp'> {props.vejnonvej} </label>
                <label className='popup-price pp'> price: ₹ {props.price} </label>
                </div>
                <div className='close-button' onClick={handleClose}>
                <span className="material-symbols-outlined">
                    close
                </span>
                </div>
            </div>
        </div>
    ) : null;
};

export default Detailedhotel;
