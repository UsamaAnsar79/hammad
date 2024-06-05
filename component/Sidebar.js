import Sidebaritems from './Sidebaritems';
import items from '../data/data.json';

export default function Sidebar(){
    return(   
<div className="sidebar">
<div className="sidebar-start">Creative tim</div>
   {items.map((item,index)=><Sidebaritems key={index} item={item} />)}
   
</div>
    )
}