import React from 'react';
import style from './food.module.css';
//A Food Component .
const Food = ({title,image,protien,carbs,fats}) =>{

    return(

<div>
    <h1>{title}</h1>
<img style={{borderRadius:'50%'}}src={image} alt="image"/>
<div className="row">
<ul>
    <div className="col s12 l4">
    <h2 className={style.protien} >protien</h2>
    <li className="green-text">{protien}</li>
    </div>
    <div className="col s12 l4">
    <h2 className={style.carbs}>CarBohydrate</h2>
    <li className="green-text">{carbs}</li>
    </div>
    <div className="col s12 l4">
    <h2 className={style.fat}>Fats</h2>
    <li className="green-text">{fats}</li>
</div>
</ul>
</div>
</div>

    );


}

export default Food;